import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Pagination } from "@/shared/utils/apiResponse";
import { Feed } from "@/features/lounge/infrastructure/model/feed.model";
import { QueryKeys } from "@/features/lounge/infrastructure/api/querykeys";
import { fetchFeed, fetchFeeds } from "@/features/lounge/infrastructure/api/api";
import { FeedsQueryParams } from "@/features/lounge/infrastructure/adapter/feed.adapter";
import { useAtomValue } from "jotai";
import { activeCategoryIdAtom } from "@/features/lounge/infrastructure/adapter/category.adapter";

/**
 * 피드 목록을 조회하는 React Query 훅
 * (기본 페이지네이션 버전)
 */
export const useFeedsQuery = (params: FeedsQueryParams = {}) => {
  const activeCategoryId = useAtomValue(activeCategoryIdAtom);

  const queryParams = {
    page: params.page ?? 0,
    size: params.size ?? 10,
    sort: params.sort ?? "createdAt:desc",
    // params에 명시적 categoryId가 있으면 사용, 없으면 활성 카테고리 ID 사용
    categoryId: params.categoryId !== undefined ? params.categoryId : activeCategoryId,
  };

  const { data, isLoading, error, refetch, ...queryResults } = useQuery<ApiResponse<Pagination<Feed>>, Error>({
    queryKey: [...QueryKeys.feeds.list, queryParams],
    queryFn: () => fetchFeeds(queryParams),
    retry: 1,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  return {
    feedItems: data?.data?.items || [],
    pagination: data?.data,
    isLoading,
    error,
    refetch,
    ...queryResults,
  };
};

export const useFeedQuery = (feedUuid: string) => {
  return useQuery<ApiResponse<Feed>, Error>({
    queryKey: ["feed", feedUuid],
    queryFn: () => fetchFeed({ feedUuid }),
    enabled: !!feedUuid,
    meta: {
      errorMessage: "피드를 불러오는 중 오류가 발생했습니다",
    },
  });
};
