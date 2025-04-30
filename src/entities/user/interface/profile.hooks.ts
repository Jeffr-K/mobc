import { useQuery } from 'react-query';

import { ApiResponse } from '@/shared/utils/apiResponse';
import { QueryKeys } from '../lib/querykey/profile.query-keys';
import { useAnalyticsStore, useProfileActivitiesStore, useProfileExperiencesStore, useProfileGarageStore, useProfileStore } from '../adapter/profile.atoms';
import { fetchAnalytics, fetchExperiences, fetchProfile, fetchProfileActivities, fetchProfileGarages, fetchProfilePersona } from '../api/profile.api';
import { Activity, Analytics, Experience, Garage, Persona, Profile } from '../model/profile.model';


export const useAnalyticsHook = (filters: { userId?: number }) => {
  const { setAnalytics } = useAnalyticsStore();

  return useQuery<ApiResponse<Analytics>, Error, Analytics>(
    QueryKeys.analytics.detail(filters.userId),
    () => fetchAnalytics(filters.userId),
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
  return useQuery<ApiResponse<Profile>, Error, Profile>(
    QueryKeys.profile.me,
    fetchProfile,
    {
      enabled: !!localStorage.getItem('accessToken'),
      select: (response: ApiResponse<Profile>): Profile => response.data,
      onError: error => {
        console.error('Error fetching profile:', error);
      },
    },
  );
};

export const useQueryProfilePersonaHook = () => {
  return useQuery<ApiResponse<Persona>, Error, Persona>(
    QueryKeys.profile.persona,
    fetchProfilePersona,
    {
      enabled: !!localStorage.getItem('accessToken'),
      select: (response: ApiResponse<Persona>): Persona => response.data,
      onError: error => {
        console.error('Error fetching persona:', error);
      },
    },
  );
}

export const useQueryProfileExperiencesHook = () => {
  const { setExperiences } = useProfileExperiencesStore();

  return useQuery<ApiResponse<Experience[]>, Error, Experience[]>(
    QueryKeys.profile.experiences,
    fetchExperiences,
    {
      enabled: !!localStorage.getItem('accessToken'),
      select: (response: ApiResponse<Experience[]>): Experience[] => response.data,
      onSuccess: (data: Experience[]) => {
        setExperiences(data);
      },
      onError: error => {
        console.error('Error fetching experiences:', error);
      },
    },
  );
}

export const useQueryProfileActivitiesHook = () => {
  const { setActivities } = useProfileActivitiesStore();

  return useQuery<ApiResponse<Activity[]>, Error, Activity[]>(
    QueryKeys.profile.activities,
    fetchProfileActivities,
    {
      enabled: !!localStorage.getItem('accessToken'),
      select: (response: ApiResponse<Activity[]>): Activity[] => response.data,
      onSuccess: (data: Activity[]) => {
        setActivities(data);
      },
      onError: error => {
        console.error('Error fetching activities:', error);
      },
    },
  );
}

export const useQueryProfileGaragesHook = () => {
  const { setGarages } = useProfileGarageStore();

  return useQuery<ApiResponse<Garage[]>, Error, Garage[]>(
  QueryKeys.profile.garages,
  fetchProfileGarages,
  {
    enabled: !!localStorage.getItem('accessToken'),
    select: (response: ApiResponse<Garage[]>): Garage[] => response.data,
    onSuccess: (data: Garage[]) => {
      setGarages(data);
    },
    onError: error => {
        console.error('Error fetching garage:', error);
      },
    },
  );
}
