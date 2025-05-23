import { Category } from "@/features/lounge/infrastructure/model/category.model";
import { Profile } from "@/features/user/core/model/profile.model";

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
    username: {
      username: string;
      nickname: string;
    };
    avatar: string;
    title: string;
    shortDescription: string;
  };
  title: string;
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
