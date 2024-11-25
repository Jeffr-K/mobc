import { useQuery } from 'react-query';

import { ApiResponse } from '../../../../../core/utils/apiResponse';
import { fetchUser } from './api';
import { QueryKeys } from './queryKeys';
import { User } from './types';

export const useQueryUserHook = (userId: string) => {
  return useQuery<ApiResponse<User>, Error>(
    QueryKeys.users.detail(userId),
    () => fetchUser(userId),
    {
      enabled: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      onSuccess: data => {
        console.log('Data fetched successfully:', data);
      },
      onError: error => {
        console.error('Error fetching @data:', error);
      },
    },
  );
};
