import { ApiResponse } from '@/core/utils/apiResponse';
import { useQuery, useMutation } from 'react-query';

import { Session } from './types';
import { fetchLogin, fetchSocialLogin } from './api';
import { QueryKeys } from './queryKeys';

export const useMutationLoginHook = () => {
  return useMutation<ApiResponse<Session>, Error, { email: string; password: string }>(
    (credentials) => fetchLogin(credentials.email, credentials.password),
    {
      onSuccess: (data) => {
        console.log('Login successful:', data);
      },
      onError: error => {
        console.error('Error fetching @data:', error);
      },
    },
  );
};

export const useQuerySocialLoginHook = (provider: string) => {
  return useQuery<ApiResponse<Session>, Error>(
    QueryKeys.auth.socialLogin(provider),
    () => fetchSocialLogin(provider),
    {
      enabled: false,
      onError: error => {
        console.error('Error fetching @data:', error);
      },
    },
  );
};