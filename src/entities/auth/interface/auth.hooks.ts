import { ApiResponse } from "@/shared/utils/apiResponse";
import { useQuery, useMutation } from "@tanstack/react-query"; // import 경로 변경
import React from "react";

import { QueryKeys } from "@/features/user/infrastructure/adapter/querykey/auth.query-keys";
import { Session } from "@/features/user/core/model/auth.model";
import { fetchLogin, fetchLogout, fetchSocialLogin } from "@/features/user/infrastructure/adapter/api/auth.api";

export const useMutationLoginHook = () => {
  const mutation = useMutation<ApiResponse<Session>, Error, { email: string; password: string }>({
    mutationFn: credentials => fetchLogin(credentials.email, credentials.password),
  });

  React.useEffect(() => {
    if (mutation.isSuccess) {
      console.log("Login successful:", mutation.data);
    }
  }, [mutation.isSuccess, mutation.data]);

  React.useEffect(() => {
    if (mutation.isError) {
      console.error("Error fetching @data:", mutation.error);
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};

export const useQuerySocialLoginHook = (provider: string) => {
  const query = useQuery<ApiResponse<Session>, Error>({
    queryKey: QueryKeys.auth.socialLogin(provider),
    queryFn: () => fetchSocialLogin(provider),
    enabled: false,
  });

  React.useEffect(() => {
    if (query.error) {
      console.error("Error fetching @data:", query.error);
    }
  }, [query.error]);

  return query;
};

export const useMutationLogoutHook = () => {
  const mutation = useMutation<any, Error, any>({
    mutationFn: fetchLogout,
    retry: 1,
  });

  // onSuccess 대체
  React.useEffect(() => {
    if (mutation.isSuccess) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  }, [mutation.isSuccess]);

  // onError 대체
  React.useEffect(() => {
    if (mutation.isError) {
      console.error("Error fetching @data:", mutation.error);
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};
