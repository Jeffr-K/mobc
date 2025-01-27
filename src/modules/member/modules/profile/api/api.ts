import { ApiResponse } from '@/infrastructure/utils/apiResponse';
import axios from 'axios';
import { Activity, Analytics, Experience, Garage, Profile } from './types';
import { fetcher } from '@/infrastructure/utils/axios';

export const fetchAnalytics = async (userId: string) =>
  await axios
    .get<ApiResponse<Analytics>>('/api/v1/analytics', { params: { userId } })
    .then(res => res.data);

export const fetchProfile = async (): Promise<ApiResponse<Profile>> => {
  const response = await fetcher.get<ApiResponse<Profile>>('/v1/profile');
  return response.data;
};

export const fetchExperiences = async (): Promise<ApiResponse<Experience[]>> => {
  const response = await fetcher.get<ApiResponse<Experience[]>>('/v1/profile/experiences');
  return response.data;
}

export const fetchProfileActivities = async (): Promise<ApiResponse<Activity[]>> => {
  const response = await fetcher.get<ApiResponse<Activity[]>>('/v1/profile/activities');
  return response.data;
}

export const fetchProfileGarages = async (): Promise<ApiResponse<Garage[]>> => {
  const response = await fetcher.get<ApiResponse<Garage[]>>('/v1/profile/garages');
  return response.data;
}