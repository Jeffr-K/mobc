import { useQuery } from 'react-query';

import { fetchFeeds } from './api';
import { QueryKeys } from './querykeys';
import { Feed } from './types';

export const useFeedsQueryHook = (props: {
  page?: number;
  size?: number;
  sort?: string;
  limit?: number;
}) => {
  const { data, refetch, ...queryResults } = useQuery<any, Error>(
    QueryKeys.feeds.list,
    () => fetchFeeds({ ...props }),
    {
      enabled: !!localStorage.getItem('accessToken'),
      retry: 1,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      onSuccess: (data): Feed[] => {
        console.log('Feeds fetched successfully:', data.data.items);
        return data.data.items;
      },
      onError: (error) => {
        console.error('Error fetching feeds:', error);
      }
    }
  );

  return { feeds: data?.data?.items || [], refetch, ...queryResults };
};