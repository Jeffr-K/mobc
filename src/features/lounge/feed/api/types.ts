export interface FeedImage {
  url: string;
  order: number;
}

export interface Feed {
  _id: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  images?: FeedImage[];
}