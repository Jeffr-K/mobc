import { ApiResponse } from "@/core/utils/apiResponse";
import axios from "axios";
import { Analytics, Introduction } from "./types";

export const fetchAnalytics = async (userId: string) =>
  await axios.get<ApiResponse<Analytics>>('/api/v1/analytics', { params: { userId } }).then(res => res.data);

export const fetchIntroduction = async (userId: string) =>
  await axios.get<ApiResponse<Introduction>>('/api/v1/introduction', { params: { userId } }).then(res => res.data);
