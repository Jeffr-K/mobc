import { Category } from "@/features/lounge/model/category.model";
import { Profile } from "@/entities/user/model/profile.model";

export interface FeedImage {
  url: string;
  order: number;
}

export interface Feed {
  _id: number;
  identifier: {
    uuid: string;
    version: number;
  };
  category: Category;
  profile: Profile;
  author: {
    name: string;
    avatar: string;
    title: string;
    shortDescription: string;
  };
  content: string;
  views: number;
  likes: number;
  comments: number;
  createdAt: string;
  shares: number;
  images?: FeedImage[];
}

export interface FeedId {
  identifier: Pick<Feed["identifier"], "uuid">;
}
