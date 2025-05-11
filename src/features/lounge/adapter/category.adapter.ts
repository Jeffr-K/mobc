import { atomWithQuery } from "jotai-tanstack-query";
import { Pagination } from "@/shared/utils/apiResponse";
import { Category } from "@/features/lounge/model/category.model";
import { QueryKeys } from "@/features/lounge/api/querykeys";
import { fetchCategories } from "@/features/lounge/api/api";
import { atom, PrimitiveAtom } from "jotai";
import { loadable } from "jotai/utils";

export const categoriesAtom = atomWithQuery<Pagination<Category>>(() => ({
  queryKey: QueryKeys.categories,
  queryFn: () => fetchCategories({ limit: 100 }),
  staleTime: 1000 * 60 * 60 * 24,
  gcTime: 1000 * 60 * 60 * 24, // cacheTime에서 gcTime으로 변경
  refetchOnMount: true,
  refetchOnWindowFocus: true,
}));

export const categoriesLoadableAtom = loadable(categoriesAtom);

/**
 * 카테고리 목록만 필터링
 */
export const categoriesListAtom = atom(get => {
  const result = get(categoriesAtom);
  // result.data가 Pagination<Category> 타입
  return result.data?.items ?? [];
});

// 선택된 카테고리 상태
export const selectedCategoryAtom = atom<number | null>(null) as PrimitiveAtom<number | null>;

/**
 * 상위 카테고리 필터링
 */
export const parentCategoriesAtom = atom(get => {
  const categories = get(categoriesListAtom);
  return categories.filter(cat => cat.parent === null);
});

/**
 * 하위 카테고리 필터링
 */
export const childCategoriesAtom = atom(get => {
  const categories = get(categoriesListAtom);
  const selectedId = get(selectedCategoryAtom);

  if (!selectedId) return [];

  return categories.filter(cat => {
    if (typeof cat.parent === "number") {
      return cat.parent === selectedId;
    }
    if (cat.parent && typeof cat.parent === "object") {
      return cat.parent._id === selectedId;
    }
    return false;
  });
});
