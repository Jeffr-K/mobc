import { QueryKeys } from "@/features/lounge/api/querykeys";
import { fetchCategories, fetchFeeds } from "@/features/lounge/api/api";
import { useQuery } from "react-query";
import { Feed } from "@/features/lounge/model/feed.model";
import { ApiResponse, Pagination } from "@/shared/utils/apiResponse";
import { Category } from "@/features/lounge/model/category.model";

export const useFeedsQueryHook = (props: { page?: number; size?: number; sort?: string; limit?: number }) => {
  const { data, refetch, ...queryResults } = useQuery<ApiResponse<Feed[]>, Error>(QueryKeys.feeds.list, () => fetchFeeds({ ...props }), {
    enabled: !!localStorage.getItem("accessToken"),
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    onSuccess: data => {
      console.log("Feeds fetched successfully:", data.data);
      return data.data;
    },
    onError: error => {
      console.error("Error fetching feeds:", error);
    },
  });

  return { feeds: data?.data ?? [], refetch, ...queryResults };
};

export const useCategoriesQueryHook = () => {
  const { data, refetch, ...queryResults } = useQuery<Pagination<Category>, Error>(
    QueryKeys.categories,
    () => {
      return fetchCategories({ limit: 100 });
    },
    {
      enabled: true,
      retry: 1,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      onSuccess: data => {
        console.log("API 응답 성공:", data);
        console.log("Categories items:", data.items);
      },
      onError: error => {
        console.error("Error fetching categories:", error);
      },
    },
  );

  return {
    categories: data?.items ?? [],
    pagination: data, // data.data가 아니라 data
    refetch,
    ...queryResults,
  };
};
