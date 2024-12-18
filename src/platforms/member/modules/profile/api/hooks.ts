import { useQuery } from "react-query"
import { fetchAnalytics } from "./api";
import { Analytics } from "./types";
import { ApiResponse } from '../../../../../core/utils/apiResponse';
import { QueryKeys } from "./queryKeys";
import { useAnalyticsStore } from "../atom/atoms";
import { fetchProfile } from './api';
import { Profile } from './types';
import { useProfileStore } from '../atom/atoms';

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

export const useQueryProfileHook = () => {
  const { setProfile } = useProfileStore();

  return useQuery<ApiResponse<Profile>, Error, Profile>(
    QueryKeys.profile.me,
    fetchProfile,
    {
      enabled: !!localStorage.getItem('accessToken'),
      select: (response: ApiResponse<Profile>): Profile => response.data,
      onSuccess: (data: Profile) => {
        setProfile(data);
      },
      onError: (error) => {
        console.error('Error fetching profile:', error);
      }
    }
  );
};