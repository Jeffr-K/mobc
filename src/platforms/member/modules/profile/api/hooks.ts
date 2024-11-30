import { useQuery } from "react-query"
import { fetchAnalytics, fetchIntroduction } from "./api";
import { Analytics, Introduction } from "./types";
import { ApiResponse } from '../../../../../core/utils/apiResponse';
import { QueryKeys } from "./queryKeys";
import { useAnalyticsStore, useIntroductionStore } from "../atom/atoms";

export const useAnalyticsHook = (userId: string) => {
  const { setAnalytics } = useAnalyticsStore();

  return useQuery<ApiResponse<Analytics>, Error, Analytics>(
    QueryKeys.analytics.detail(userId),
    () => fetchAnalytics(userId),
    {
      enabled: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      select: (data: ApiResponse<Analytics>): Analytics => {
        return data.data;
      },
      onSuccess: (data: Analytics): void => {
        setAnalytics(data);
      },
      onError: error => {
        console.error('Error fetching @data:', error)
      }
    }
  )
}

export const useIntroductionHook = (userId: string) => {
  const { setIntroduction } = useIntroductionStore();

  return useQuery<ApiResponse<Introduction>, Error, Introduction>(
    QueryKeys.introduction.detail(userId),
    () => fetchIntroduction(userId),
    {
      enabled: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      select: (data: ApiResponse<Introduction>): Introduction => {
        return data.data;
      },
      onSuccess: (data: Introduction): void => {
        setIntroduction(data);
      },
      onError: error => {
        console.error('Error fetching @data:', error)
      }
    }
  )
}