import { useQuery } from 'react-query';
import { ApiResponse } from '../../../../../core/utils/apiResponse';
import { fetchUser } from './api';
import { QueryKeys } from './queryKeys';
import { User } from './types';
import { useLocation } from 'react-router-dom';

export const useQueryUserHook = () => {
  const location = useLocation();
  const isRegistrationPage = location.pathname === '/registration';

  const { data, refetch, ...queryResults } = useQuery<any, Error>(
    QueryKeys.user.me,
    fetchUser,
    {
      enabled: !!localStorage.getItem('accessToken') && !isRegistrationPage,
      retry: 1,
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      onSuccess: (data) => {
        if (data?.data) {
          localStorage.setItem('userData', JSON.stringify(data.data));
        }
      },
      onError: (error) => {
        if (error.message.includes('401')) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userData');
        }
        console.error('Error fetching user:', error);
      }
    }
  );

  const cachedUserData = localStorage.getItem('userData');
  return { 
    userData: data?.data || (cachedUserData ? JSON.parse(cachedUserData) : null),
    refetch,
    ...queryResults 
  };
};