import { ApiResponse } from "@/shared/utils/apiResponse";
import axios from "axios";

import { fetcher } from "@/shared/utils/axios";
import { Activity, Analytics, Experience, Garage, Persona, Profile } from "../model/profile.model";

export const fetchAnalytics = async (userId: number) =>
  await axios.get<ApiResponse<Analytics>>("/api/v1/analytics", { params: { userId } }).then(res => res.data);

export const fetchProfile = async (): Promise<ApiResponse<Profile>> => {
  const response = await fetcher.get<ApiResponse<Profile>>("/v1/profile");
  return response.data;
};

export const fetchProfilePersona = async (): Promise<ApiResponse<Persona>> => {
  const response = await fetcher.get<ApiResponse<Persona>>("/v1/profile/persona");
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
