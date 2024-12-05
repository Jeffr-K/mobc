import { useQuery } from 'react-query';
import { ApiResponse } from '../../../../../core/utils/apiResponse';
import { fetchUser } from './api';
import { QueryKeys } from './queryKeys';
import { User } from './types';

export const useQueryUserHook = () => {
  const { data: userData, refetch, ...queryResults } = useQuery<ApiResponse<User>, Error, User>(
    QueryKeys.user.me,
    fetchUser,
    {
      enabled: !!localStorage.getItem('accessToken'),
      retry: false,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      onError: (error) => {
        if (error.message.includes('401')) {
          localStorage.removeItem('accessToken');
        }
        console.error('Error fetching user:', error);
      },
      select: (response) => response.data
    }
  );

  return { userData, refetch, ...queryResults };
};