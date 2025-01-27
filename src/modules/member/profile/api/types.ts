import { User } from '../../user/api/types';

export interface Analytics {
  totalViews: number;
  profileRank: number;
  appearance: number;
}

export interface Persona {
  cave: string;
  personal: string;
  identity: string;
  interests: string[] | null;
  location: string;
  description: string;
  summary: string;
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

export interface Profile {
  id: string;
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