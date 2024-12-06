import { ApiResponse } from "@/core/utils/apiResponse";
import axios from "axios";
import { Analytics, Profile } from "./types";
import { fetcher } from '@/core/utils/axios';

export const fetchAnalytics = async (userId: string) =>
  await axios.get<ApiResponse<Analytics>>('/api/v1/analytics', { params: { userId } }).then(res => res.data);

export const fetchProfile = async (): Promise<ApiResponse<Profile>> => {
  const response = await fetcher.get<ApiResponse<Profile>>('/v1/profile');
  return response.data;
};
