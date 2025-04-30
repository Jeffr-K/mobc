import { ApiResponse } from '@/shared/utils/apiResponse';
import { fetcher } from '@/shared/utils/axios';
import { Feed } from './types';

export const fetchFeeds = async (params: {
  page?: number;
  size?: number;
  sort?: string;
  limit?: number;
}): Promise<ApiResponse<Feed[]>> => {
  const response = await fetcher.get<ApiResponse<Feed[]>>('/v1/feed/list', { params });
  return response.data;
};