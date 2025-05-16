import { ApiResponse, Pagination } from "@/shared/utils/apiResponse";

import { fetcher } from "@/shared/utils/axios";
import { Feed, FeedId } from "@/features/lounge/model/feed.model";
import { Category } from "@/features/lounge/model/category.model";

export const fetchFeeds = async (params: { page?: number; size?: number; sort?: string; limit?: number }) => {
  const response = await fetcher.get<ApiResponse<Feed[]>>("/v1/feed/list", { params });
  return response.data;
};

/**
 * 피드 상세 조회
 * @param params
 */
export const fetchFeed = async (params: { feedUuid: string }): Promise<ApiResponse<Feed>> => {
  const response = await fetcher.get<ApiResponse<Feed>>("/v1/feed", { params });
  return response.data;
};

/**
 * 피드 작성
 * @param formData
 * @returns feedUUID
 */
export const fetchCreateFeed = async (formData: FormData, accessToken: string): Promise<ApiResponse<FeedId>> => {
  const response = await fetcher.post<ApiResponse<FeedId>>("/v1/feeds", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

/**
 * 파일 업로드
 * @param formData
 */
export const fetchUploadFile = async (formData: FormData, accessToken: string): Promise<ApiResponse<{ fileUrl: string }>> => {
  const response = await fetcher.post<ApiResponse<{ fileUrl: string }>>("/v1/feeds/upload", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

/**
 * 카테고리 목록 조회
 * @param params
 */
export const fetchCategories = async (params?: { limit?: number; page?: number }): Promise<Pagination<Category>> => {
  try {
    const response = await fetcher.get<Pagination<Category>>("/v1/categories", {
      params: {
        page: params?.page,
        limit: params?.limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
