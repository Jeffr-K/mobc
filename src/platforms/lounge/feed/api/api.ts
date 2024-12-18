import { ApiResponse } from '@/core/utils/apiResponse';
import { fetcher } from '@/core/utils/axios';
import { Feed } from './types';

export const fetchFeeds = async (): Promise<ApiResponse<Feed[]>> => {
  const response = await fetcher.get<ApiResponse<Feed[]>>('/v1/feeds');
  return response.data;
};