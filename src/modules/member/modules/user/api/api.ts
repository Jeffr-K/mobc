import { ApiResponse } from '@/infrastructure/utils/apiResponse';
import { fetcher } from '@/infrastructure/utils/axios';
import { User } from './types';

export const fetchUser = async (): Promise<ApiResponse<User>> => {
  const response = await fetcher.get<ApiResponse<User>>('/v1/user');
  return response.data;
};

export const fetchUsers = async (page: number, limit: number) =>
  await fetcher
    .get<ApiResponse<User[]>>('/v1/users', { params: { page, limit } })
    .then(res => res.data);
