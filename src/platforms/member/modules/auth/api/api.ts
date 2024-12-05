import { ApiResponse } from "@/core/utils/apiResponse";
import { fetcher } from "@/core/utils/axios";
import { Session } from "./types";

export const fetchLogin = async (email: string, password: string): Promise<ApiResponse<Session>> => {
  const response = await fetcher.post<ApiResponse<Session>>('/v1/auth/login', {
    email,
    password
  });
  return response.data;
};

export const fetchSocialLogin = async (provider: string): Promise<ApiResponse<Session>> => {
  const response = await fetcher.post<ApiResponse<Session>>(`/v1/auth/${provider}/login`);
  return response.data;
};
