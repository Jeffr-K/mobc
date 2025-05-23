import { ApiResponse } from "@/shared/utils/apiResponse";
import { fetcher } from "@/shared/utils/axios";
import { User } from "@/features/user/core/model/user.model";

export const fetchUser = async (): Promise<ApiResponse<User>> => {
  const response = await fetcher.get<ApiResponse<User>>("/v1/user");
  return response.data;
};

export const fetchUsers = async (page: number, limit: number) =>
  await fetcher.get<ApiResponse<User[]>>("/v1/users", { params: { page, limit } }).then(res => res.data);
