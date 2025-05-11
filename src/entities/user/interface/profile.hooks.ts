import { useQuery } from "@tanstack/react-query";
import React from "react";

import { ApiResponse } from "@/shared/utils/apiResponse";
import { QueryKeys } from "../lib/querykey/profile.query-keys";
import { useAnalyticsStore, useProfileActivitiesStore, useProfileExperiencesStore, useProfileGarageStore } from "../adapter/profile.atoms";
import {
  fetchAnalytics,
  fetchExperiences,
  fetchProfile,
  fetchProfileActivities,
  fetchProfileGarages,
  fetchProfilePersona,
} from "../api/profile.api";
import { Activity, Analytics, Experience, Garage, Persona, Profile } from "../model/profile.model";

export const useAnalyticsHook = (filters: { userId?: number }) => {
  const { setAnalytics } = useAnalyticsStore();

  const query = useQuery<ApiResponse<Analytics>, Error, Analytics>({
    queryKey: QueryKeys.analytics.detail(filters.userId),
    queryFn: () => fetchAnalytics(filters.userId),
    enabled: false,
    retry: 1,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30, // v5에서 cacheTime이 gcTime으로 변경
    select: (data: ApiResponse<Analytics>): Analytics => {
      return data.data;
    },
  });

  React.useEffect(() => {
    if (query.data) {
      setAnalytics(query.data);
    }
  }, [query.data, setAnalytics]);

  React.useEffect(() => {
    if (query.error) {
      console.error("Error fetching @data:", query.error);
    }
  }, [query.error]);

  return query;
};

export const useQueryProfileHook = () => {
  const query = useQuery<ApiResponse<Profile>, Error, Profile>({
    queryKey: QueryKeys.profile.me,
    queryFn: fetchProfile,
    enabled: !!localStorage.getItem("accessToken"),
    select: (response: ApiResponse<Profile>): Profile => response.data,
  });

  React.useEffect(() => {
    if (query.error) {
      console.error("Error fetching profile:", query.error);
    }
  }, [query.error]);

  return query;
};

export const useQueryProfilePersonaHook = () => {
  const query = useQuery<ApiResponse<Persona>, Error, Persona>({
    queryKey: QueryKeys.profile.persona,
    queryFn: fetchProfilePersona,
    enabled: !!localStorage.getItem("accessToken"),
    select: (response: ApiResponse<Persona>): Persona => response.data,
  });

  React.useEffect(() => {
    if (query.error) {
      console.error("Error fetching persona:", query.error);
    }
  }, [query.error]);

  return query;
};

export const useQueryProfileExperiencesHook = () => {
  const { setExperiences } = useProfileExperiencesStore();

  const query = useQuery<ApiResponse<Experience[]>, Error, Experience[]>({
    queryKey: QueryKeys.profile.experiences,
    queryFn: fetchExperiences,
    enabled: !!localStorage.getItem("accessToken"),
    select: (response: ApiResponse<Experience[]>): Experience[] => response.data,
  });

  React.useEffect(() => {
    if (query.data) {
      setExperiences(query.data);
    }
  }, [query.data, setExperiences]);

  React.useEffect(() => {
    if (query.error) {
      console.error("Error fetching experiences:", query.error);
    }
  }, [query.error]);

  return query;
};

export const useQueryProfileActivitiesHook = () => {
  const { setActivities } = useProfileActivitiesStore();

  const query = useQuery<ApiResponse<Activity[]>, Error, Activity[]>({
    queryKey: QueryKeys.profile.activities,
    queryFn: fetchProfileActivities,
    enabled: !!localStorage.getItem("accessToken"),
    select: (response: ApiResponse<Activity[]>): Activity[] => response.data,
  });

  React.useEffect(() => {
    if (query.data) {
      setActivities(query.data);
    }
  }, [query.data, setActivities]);

  React.useEffect(() => {
    if (query.error) {
      console.error("Error fetching activities:", query.error);
    }
  }, [query.error]);

  return query;
};

export const useQueryProfileGaragesHook = () => {
  const { setGarages } = useProfileGarageStore();

  const query = useQuery<ApiResponse<Garage[]>, Error, Garage[]>({
    queryKey: QueryKeys.profile.garages,
    queryFn: fetchProfileGarages,
    enabled: !!localStorage.getItem("accessToken"),
    select: (response: ApiResponse<Garage[]>): Garage[] => response.data,
  });

  React.useEffect(() => {
    if (query.data) {
      setGarages(query.data);
    }
  }, [query.data, setGarages]);

  React.useEffect(() => {
    if (query.error) {
      console.error("Error fetching garage:", query.error);
    }
  }, [query.error]);

  return query;
};
