import { atomWithQuery } from "jotai-tanstack-query";
import { Pagination } from "@/shared/utils/apiResponse";
import { Category } from "@/features/lounge/infrastructure/model/category.model";
import { QueryKeys } from "@/features/lounge/infrastructure/api/querykeys";
import { fetchCategories } from "@/features/lounge/infrastructure/api/api";
import { atom, PrimitiveAtom } from "jotai";
import { loadable } from "jotai/utils";

// 카테고리 조회 atom
export const categoriesAtom = atomWithQuery<Pagination<Category>>(() => ({
  queryKey: QueryKeys.categories,
  queryFn: () => fetchCategories({ limit: 100 }),
  staleTime: 1000 * 60 * 60 * 24,
  gcTime: 1000 * 60 * 60 * 24,
  refetchOnMount: true,
  refetchOnWindowFocus: true,
}));

export const categoriesLoadableAtom = loadable(categoriesAtom);

/**
 * 카테고리 목록만 필터링
 */
export const categoriesListAtom = atom(get => {
  const result = get(categoriesAtom);
  return result.data?.items ?? [];
});

// 선택된 카테고리 상태
export const selectedCategoryAtom = atom<number | null>(null) as PrimitiveAtom<number | null>;

/**
 * 선택된 하위 카테고리 상태
 */
export const selectedSubCategoryAtom = atom<number | null>(null) as PrimitiveAtom<number | null>;

/**
 * 현재 활성화된 카테고리 ID(들) 추출 - 피드 필터링에 사용
 */
export const activeCategoryIdsAtom = atom(get => {
  const selectedMain = get(selectedCategoryAtom);
  const selectedSub = get(selectedSubCategoryAtom);

  // 하위 카테고리가 선택된 경우 해당 ID만 반환
  if (selectedSub) {
    return [selectedSub];
  }

  // 상위 카테고리만 선택된 경우, 해당 ID와 모든 하위 카테고리 ID 반환
  if (selectedMain) {
    const categories = get(categoriesListAtom);

    // 선택된 상위 카테고리의 모든 하위 카테고리 찾기
    const childIds = categories
      .filter(cat => {
        if (!cat.parent) return false;
        const parentId = typeof cat.parent === "object" ? cat.parent._id : cat.parent;
        return parentId === selectedMain;
      })
      .map(cat => cat._id);

    // 상위 카테고리와 하위 카테고리 모두 포함
    return [selectedMain, ...childIds];
  }

  // 선택된 카테고리가 없으면 빈 배열 반환 (전체 카테고리)
  return [];
});

export const activeCategoryIdAtom = atom(get => {
  const selectedSubCategory = get(selectedSubCategoryAtom);
  const selectedCategory = get(selectedCategoryAtom);

  // 하위 카테고리가 선택된 경우, 해당 ID 반환
  if (selectedSubCategory !== null) {
    return selectedSubCategory;
  }

  // 상위 카테고리만 선택된 경우, 해당 ID 반환
  if (selectedCategory !== null) {
    return selectedCategory;
  }

  // 아무것도 선택되지 않았으면 null 반환
  return null;
});

/**
 * 상위 카테고리 필터링 - parent가 없는 카테고리
 */
export const parentCategoriesAtom = atom(get => {
  const categories = get(categoriesListAtom);

  const parents = categories.filter(cat => !cat.parent);

  return parents;
});

/**
 * 하위 카테고리 필터링 - parent가 선택된 카테고리인 항목들
 */
export const childCategoriesAtom = atom(get => {
  const categories = get(categoriesListAtom);
  const selectedId = get(selectedCategoryAtom);

  if (!selectedId) return [];

  const children = categories.filter(cat => {
    if (!cat.parent) return false;

    if (typeof cat.parent === "object") {
      return cat.parent._id === selectedId;
    }

    return cat.parent === selectedId;
  });

  console.log("하위 카테고리:", children);
  return children;
});
