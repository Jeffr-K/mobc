import { ApiResponse, Pagination } from "@/shared/utils/apiResponse";

import { fetcher } from "@/shared/utils/axios";
import { Feed } from "@/features/lounge/model/feed.model";
import { Category } from "@/features/lounge/model/category.model";

export const fetchFeeds = async (params: { page?: number; size?: number; sort?: string; limit?: number }) => {
  const response = await fetcher.get<ApiResponse<Feed[]>>("/v1/feed/list", { params });
  return response.data;
};

export const fetchCategories = async (params?: { limit?: number; page?: number }): Promise<Pagination<Category>> => {
  try {
    const response = await fetcher.get<Pagination<Category>>("/v1/categories", {
      params: {
        page: params?.page,
        limit: params?.limit,
      },
    }); //
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
