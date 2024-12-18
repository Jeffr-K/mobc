import { useQuery } from 'react-query';
import { fetchUser } from './api';
import { QueryKeys } from './queryKeys';
import { useLocation } from 'react-router-dom';

export const useQueryUserHook = () => {
  // const location = useLocation();
  // const isRegistrationPage = location.pathname === '/registration';

  const { data, refetch, ...queryResults } = useQuery<any, Error>(
    QueryKeys.user.me,
    fetchUser,
    {
      enabled: !!localStorage.getItem('accessToken') ,
      retry: 1,
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      onSuccess: (data) => {
        if (data?.data) {
          localStorage.setItem('user', JSON.stringify(data.data));
        }
      },
      onError: (error) => {
        if (error.message.includes('401')) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user');
        }
        console.error('Error fetching user:', error);
      }
    }
  );

  const cachedUserData = localStorage.getItem('user');
  return { 
    userData: data?.data || (cachedUserData ? JSON.parse(cachedUserData) : null),
    refetch,
    ...queryResults 
  };
};