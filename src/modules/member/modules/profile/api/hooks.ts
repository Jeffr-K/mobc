import { useQuery } from 'react-query';
import { fetchAnalytics, fetchExperiences, fetchProfile, fetchProfileActivities, fetchProfileGarages } from './api';
import { Activity, Analytics, Experience, Garage, Profile } from './types';
import { ApiResponse } from '@/infrastructure/utils/apiResponse';
import { QueryKeys } from './queryKeys';
import { useAnalyticsStore, useProfileActivitiesStore, useProfileExperiencesStore, useProfileGarageStore, useProfileStore } from '../atom/atoms';

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
        console.error('Error fetching @data:', error);
      },
    },
  );
};

export const useQueryProfileHook = () => {
  const { setProfile } = useProfileStore();

  return useQuery<ApiResponse<Profile>, Error, Profile>(QueryKeys.profile.me, fetchProfile, {
    enabled: !!localStorage.getItem('accessToken'),
    select: (response: ApiResponse<Profile>): Profile => response.data,
    onSuccess: (data: Profile) => {
      setProfile(data);
    },
    onError: error => {
      console.error('Error fetching profile:', error);
    },
  });
};

export const useQueryProfileExperiencesHook = () => {
  const { setExperiences } = useProfileExperiencesStore();

  return useQuery<ApiResponse<Experience[]>, Error, Experience[]>(QueryKeys.profile.experiences, fetchExperiences, {
    enabled: !!localStorage.getItem('accessToken'),
    select: (response: ApiResponse<Experience[]>): Experience[] => response.data,
    onSuccess: (data: Experience[]) => {
      setExperiences(data);
    },
    onError: error => {
      console.error('Error fetching experiences:', error);
    },
  });
}

export const useQueryProfileActivitiesHook = () => {
  const { setActivities } = useProfileActivitiesStore();

  return useQuery<ApiResponse<Activity[]>, Error, Activity[]>(QueryKeys.profile.activities, fetchProfileActivities, {
    enabled: !!localStorage.getItem('accessToken'),
    select: (response: ApiResponse<Activity[]>): Activity[] => response.data,
    onSuccess: (data: Activity[]) => {
      setActivities(data);
    },
    onError: error => {
      console.error('Error fetching activities:', error);
    },
  });
}

export const useQueryProfileGaragesHook = () => {
  const { setGarages } = useProfileGarageStore();

  return useQuery<ApiResponse<Garage[]>, Error, Garage[]>(QueryKeys.profile.garages, fetchProfileGarages, {
    enabled: !!localStorage.getItem('accessToken'),
    select: (response: ApiResponse<Garage[]>): Garage[] => response.data,
    onSuccess: (data: Garage[]) => {
      setGarages(data);
    },
    onError: error => {
      console.error('Error fetching garage:', error);
    },
  });
}
