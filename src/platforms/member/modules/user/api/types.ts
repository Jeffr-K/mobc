export interface Agreement {
  privacyPolicy: boolean;
  terms: boolean;
  notMinority: boolean;
}

export interface User {
  uuid: string;
  username: string;
  nickname: string;
  email: string;
  agreements: Agreement;
  _id: number;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export interface ApiResponse<T> {
  data: T;
  statusCode: number;
}

export type UserResponse = ApiResponse<User>;