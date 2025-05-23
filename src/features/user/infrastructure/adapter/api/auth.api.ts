import { Session } from "@/features/user/core/model/auth.model";
import { ApiResponse } from "@/shared/utils/apiResponse";
import { fetcher } from "@/shared/utils/axios";

export const fetchLogin = async (email: string, password: string): Promise<ApiResponse<Session>> => {
  const response = await fetcher.post<ApiResponse<Session>>("/v1/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const fetchSocialLogin = async (provider: string): Promise<ApiResponse<Session>> => {
  const response = await fetcher.post<ApiResponse<Session>>(`/v1/auth/${provider}/login`);
  return response.data;
};

export const fetchLogout = async () => {
  const accessToken = localStorage.getItem("accessToken");

  await fetcher.delete("/v1/auth/logout", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
