import { User } from "./user.model";

export interface Profile {
  uuid: string;
  avatar: string;
  persona: Persona;
  skill: Skill;
  experience: Experience[];
  education: Education[];
  activity: Activity;
  garage: Garage;
  user: User;
  createdAt: string;
  updatedAt: string;
  deleteAt: string;
}

export interface Persona {
  contact: {
    email: string;
    github: string;
    blog: string;
  };
  personal: {
    name: string;
    description: string;
    job: string;
    personality: string;
    interests: string[];
  };
  identity: {
    frontend: string;
    backend: string;
    tools: string;
  };
  location: {
    address: string;
    education: string;
    experience: string;
  };
}

export interface Stack {
  name: string;
  image: string;
}

export interface Tool {
  name: string;
  image: string;
}

export interface Skill {
  techSkills: Stack[] | null;
  usableTools: Tool[] | null;
}

export interface Experience {
  companyName: string;
  companyLogo: string;
  companyArea: string;
  team: string;
  role: string;
  summary: string;
  description: string;
  period: Date[];
  location: string;
}

export interface Education {
  status: string;
  school: string;
  major: string;
  degree: string;
  period: string;
  description: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  period: string[];
  role: string;
  team: string;
  location: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export interface Garage {
  id: string;
  title: string;
  description: string;
  period: string[];
  role: string;
  team: string;
  location: string;
  isPublic: boolean;
  url?: string;
  language?: string;
  stars?: number;
  forks?: number;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

// 새로운 모델들
export interface BlogPost {
  id: string;
  profileId: string;
  title: string;
  url: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  profileId: string;
  title: string;
  description: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface SkillItem {
  id: string;
  profileId: string;
  category: SkillCategory;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type SkillCategory = '프론트엔드' | '백엔드' | 'DevOps' | '관심사';

export interface CreateBlogPostRequest {
  title: string;
  url: string;
}

export interface CreateProjectRequest {
  title: string;
  description: string;
  link: string;
}

export interface CreateSkillRequest {
  category: SkillCategory;
  name: string;
}

export interface DeleteBlogPostRequest {
  id: string;
}

export interface DeleteProjectRequest {
  id: string;
}

export interface DeleteSkillRequest {
  id: string;
}
