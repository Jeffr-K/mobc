export interface Feed {
  id: string;
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
  images?: string[];
}