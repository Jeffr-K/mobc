import { User } from "../../user/api/types";

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
  stacks: Stack[] | null;
  etc: Tool[] | null;
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
  id: string;
  item: any[] | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface Garage {
  id: string;
  items: any[] | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
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