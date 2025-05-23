import { ApiResponse } from "@/shared/utils/apiResponse";

import { fetcher } from "@/shared/utils/axios";
import { Activity, Experience, Garage, Persona, Profile } from "@/features/user/core/model/profile.model";
import { Analytics } from "@/features/user/core/model/widget.model";


export const fetchProfile = async (): Promise<ApiResponse<Profile>> => {
  const response = await fetcher.get<ApiResponse<Profile>>("/v1/profiles");
  return response.data;
};

export const fetchProfilePersona = async (): Promise<ApiResponse<Persona>> => {
  const response = await fetcher.get<ApiResponse<Persona>>("/v1/profiles/persona");
  return response.data;
};

export const fetchExperiences = async (): Promise<ApiResponse<Experience[]>> => {
  const response = await fetcher.get<ApiResponse<Experience[]>>("/v1/profile/experiences");
  return response.data;
};

export const fetchProfileActivities = async (): Promise<ApiResponse<Activity[]>> => {
  const response = await fetcher.get<ApiResponse<Activity[]>>("/v1/profile/activities");
  return response.data;
};

export const fetchProfileGarages = async (): Promise<ApiResponse<Garage[]>> => {
  const response = await fetcher.get<ApiResponse<Garage[]>>("/v1/profile/garages");
  return response.data;
};

export const updateProfilePersona = async (body: Partial<Persona>): Promise<ApiResponse<Pick<Profile, "uuid">>> => {
  const response = await fetcher.patch<ApiResponse<Pick<Profile, "uuid">>>("/v1/profiles/persona", body);
  return response.data;
};

export const fetchAnalytics = async (userId: number): Promise<ApiResponse<Analytics>> => {
  const response = await fetcher.get<ApiResponse<Analytics>>(`/v1/analytics?userId=${userId}`);
  return response.data;
};