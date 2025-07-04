import { ApiResponse } from '@/shared/utils/apiResponse';
import { useQuery, useMutation } from 'react-query';

import { QueryKeys } from '../../user/lib/querykey/auth.query-keys';
import { Session } from '../../user/model/auth.model';
import { fetchLogin, fetchLogout, fetchSocialLogin } from '../../user/api/auth.api';

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

export const useMutationLogoutHook = () => {
  return useMutation<any, Error, any>(
    fetchLogout,
    {
      retry: 1,
      onSuccess: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
      },
      onError: error => {
        console.error('Error fetching @data:', error);
      },
    }
  )
}