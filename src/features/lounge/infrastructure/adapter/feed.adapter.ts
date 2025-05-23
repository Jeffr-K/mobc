import { atomWithQuery } from "jotai-tanstack-query";
import { atom, PrimitiveAtom } from "jotai";
import { loadable } from "jotai/utils";

import { QueryKeys } from "@/features/lounge/infrastructure/api/querykeys";
import { fetchFeed, fetchFeeds } from "@/features/lounge/infrastructure/api/api";

export interface FeedsQueryParams {
  page?: number;
  size?: number;
  sort?: string;
  categoryId?: number | null;
}

export const feedsParamsAtom = atom<FeedsQueryParams>({
  page: 1,
  size: 10,
  sort: "createdAt:desc",
  categoryId: null,
});
export const feedsAtom = atomWithQuery(get => {
  const params = get(feedsParamsAtom);

  return {
    queryKey: [...QueryKeys.feeds.list, params],
    queryFn: () => fetchFeeds(params),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  };
});

export const feedsLoadableAtom = loadable(feedsAtom);

export const feedsListAtom = atom(get => {
  const result = get(feedsAtom);
  return result.data ?? [];
});

export const feedsMetaAtom = atom(get => {
  const result = get(feedsAtom);
  return result.data;
});

export const selectedFeedIdAtom = atom<string | null>(null) as PrimitiveAtom<string | null>;
export const selectedFeedAtom = atomWithQuery(get => {
  const selectedId = get(selectedFeedIdAtom);

  return {
    queryKey: [...QueryKeys.feeds.detail, selectedId],
    queryFn: () => (selectedId ? fetchFeed({ feedUuid: selectedId }) : Promise.resolve(null)),
    enabled: selectedId !== null,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  };
});

export const selectedFeedLoadableAtom = loadable(selectedFeedAtom);
