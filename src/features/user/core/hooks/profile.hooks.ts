import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import React from "react";

import { ApiResponse } from "@/shared/utils/apiResponse";
import { QueryKeys } from "@/features/user/infrastructure/adapter/querykey/profile.query-keys";
import {
  useAnalyticsStore,
  useProfileActivitiesStore,
  useProfileExperiencesStore,
  useProfileGarageStore,
} from "@/features/user/infrastructure/atoms/profile.atoms";
import {
  fetchAnalytics,
  fetchExperiences,
  fetchProfile,
  fetchProfileActivities,
  fetchProfileGarages,
  fetchProfilePersona,
} from "@/features/user/infrastructure/adapter/api/profile.api";
import { Activity, Experience, Garage, Persona, Profile, BlogPost, Project, SkillItem, CreateBlogPostRequest, CreateProjectRequest, CreateSkillRequest } from "@/features/user/core/model/profile.model";
import { Analytics } from "@/features/user/core/model/widget.model";
import { mockProfile } from '../../infrastructure/mock/data/profile.data';
import { mockBlogPosts } from '../../infrastructure/mock/data/blog-posts.data';
import { mockProjects } from '../../infrastructure/mock/data/projects.data';
import { mockSkills } from '../../infrastructure/mock/data/skills.data';

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

// API 호출 함수들
const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch('/api/v1/profiles/blog-posts');
  if (!response.ok) throw new Error('블로그 포스트를 불러오는데 실패했습니다.');
  return response.json();
};

const createBlogPost = async (data: CreateBlogPostRequest): Promise<BlogPost> => {
  const response = await fetch('/api/v1/profiles/blog-posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('블로그 포스트 추가에 실패했습니다.');
  return response.json();
};

const deleteBlogPost = async (id: string): Promise<void> => {
  const response = await fetch(`/api/v1/profiles/blog-posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('블로그 포스트 삭제에 실패했습니다.');
};

const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch('/api/v1/profiles/projects');
  if (!response.ok) throw new Error('프로젝트를 불러오는데 실패했습니다.');
  return response.json();
};

const createProject = async (data: CreateProjectRequest): Promise<Project> => {
  const response = await fetch('/api/v1/profiles/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('프로젝트 추가에 실패했습니다.');
  return response.json();
};

const deleteProject = async (id: string): Promise<void> => {
  const response = await fetch(`/api/v1/profiles/projects/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('프로젝트 삭제에 실패했습니다.');
};

const fetchSkills = async (): Promise<SkillItem[]> => {
  const response = await fetch('/api/v1/profiles/skills');
  if (!response.ok) throw new Error('기술 스택을 불러오는데 실패했습니다.');
  return response.json();
};

const createSkill = async (data: CreateSkillRequest): Promise<SkillItem> => {
  const response = await fetch('/api/v1/profiles/skills', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('기술 스택 추가에 실패했습니다.');
  return response.json();
};

const deleteSkill = async (id: string): Promise<void> => {
  const response = await fetch(`/api/v1/profiles/skills/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('기술 스택 삭제에 실패했습니다.');
};

// 커스텀 훅들
export const useBlogPosts = () => {
  const queryClient = useQueryClient();
  
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => Promise.resolve(mockBlogPosts)
  });

  const createMutation = useMutation({
    mutationFn: createBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
    },
  });

  return {
    blogPosts,
    isLoading,
    error,
    createBlogPost: createMutation.mutate,
    deleteBlogPost: deleteMutation.mutate,
  };
};

export const useProjects = () => {
  const queryClient = useQueryClient();
  
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: () => Promise.resolve(mockProjects)
  });

  const createMutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  return {
    projects,
    isLoading,
    error,
    createProject: createMutation.mutate,
    deleteProject: deleteMutation.mutate,
  };
};

export const useSkills = () => {
  const queryClient = useQueryClient();
  
  const { data: skills, isLoading, error } = useQuery({
    queryKey: ['skills'],
    queryFn: () => Promise.resolve(mockSkills)
  });

  const createMutation = useMutation({
    mutationFn: createSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] });
    },
  });

  return {
    skills,
    isLoading,
    error,
    createSkill: createMutation.mutate,
    deleteSkill: deleteMutation.mutate,
  };
};

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => Promise.resolve(mockProfile)
  });
}
