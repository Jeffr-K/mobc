import { useQuery } from 'react-query';

import { fetchFeeds } from './api';
import { QueryKeys } from './querykeys';

export const useFeedsQueryHook = () => {
  const { data, refetch, ...queryResults } = useQuery<any, Error>(
    QueryKeys.feeds.list,
    fetchFeeds,
    {
      enabled: !!localStorage.getItem('accessToken'),
      retry: 1,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      onSuccess: (data) => {
        console.log('Feeds fetched successfully:', data.data);
      },
      onError: (error) => {
        console.error('Error fetching feeds:', error);
      }
    }
  );

  return { feeds: data, refetch, ...queryResults };
};