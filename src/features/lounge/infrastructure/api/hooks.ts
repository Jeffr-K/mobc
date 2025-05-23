import { QueryKeys } from "@/features/lounge/infrastructure/api/querykeys";
import { fetchCategories } from "@/features/lounge/infrastructure/api/api";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@/shared/utils/apiResponse";
import { Category } from "@/features/lounge/infrastructure/model/category.model";
import React from "react";

export const useCategoriesQueryHook = () => {
  const { data, refetch, error, ...queryResults } = useQuery<Pagination<Category>, Error>({
    queryKey: QueryKeys.categories,
    queryFn: () => fetchCategories({ limit: 100 }),
    enabled: true,
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  React.useEffect(() => {
    if (data) {
      console.log("API 응답 성공:", data);
      console.log("Categories items:", data.items);
    }
  }, [data]);

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
