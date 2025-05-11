import { QueryKeys } from "@/features/lounge/api/querykeys";
import { fetchCategories, fetchFeeds } from "@/features/lounge/api/api";
import { useQuery } from "@tanstack/react-query"; // import 경로 변경
import { Feed } from "@/features/lounge/model/feed.model";
import { ApiResponse, Pagination } from "@/shared/utils/apiResponse";
import { Category } from "@/features/lounge/model/category.model";
import React from "react";

export const useFeedsQueryHook = (props: { page?: number; size?: number; sort?: string; limit?: number }) => {
  const { data, refetch, error, ...queryResults } = useQuery<ApiResponse<Feed[]>, Error>({
    queryKey: QueryKeys.feeds.list,
    queryFn: () => fetchFeeds({ ...props }),
    enabled: !!localStorage.getItem("accessToken"),
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24, // cacheTime → gcTime
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  // onSuccess 대체
  React.useEffect(() => {
    if (data?.data) {
      console.log("Feeds fetched successfully:", data.data);
    }
  }, [data]);

  // onError 대체
  React.useEffect(() => {
    if (error) {
      console.error("Error fetching feeds:", error);
    }
  }, [error]);

  return { feeds: data?.data ?? [], refetch, ...queryResults };
};

export const useCategoriesQueryHook = () => {
  const { data, refetch, error, ...queryResults } = useQuery<Pagination<Category>, Error>({
    queryKey: QueryKeys.categories,
    queryFn: () => fetchCategories({ limit: 100 }),
    enabled: true,
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24, // cacheTime → gcTime
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  // onSuccess 대체
  React.useEffect(() => {
    if (data) {
      console.log("API 응답 성공:", data);
      console.log("Categories items:", data.items);
    }
  }, [data]);

  // onError 대체
  React.useEffect(() => {
    if (error) {
      console.error("Error fetching categories:", error);
    }
  }, [error]);

  return {
    categories: data?.items ?? [],
    pagination: data,
    refetch,
    ...queryResults,
  };
};
