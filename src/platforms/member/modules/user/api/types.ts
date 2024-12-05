export interface Agreement {
  privacyPolicy: boolean;
  terms: boolean;
  notMinority: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  birth?: string;
  phone?: string;
  password: string;
  registeredFrom: string;
  agreements: Agreement[];
  createdAt: string;
  updatedAt: string;
  withdrawalAt: string | null;
  withdrawalReason: string;
}

export interface ApiResponse<T> {
  data: T;
  statusCode: number;
}

export type UserResponse = ApiResponse<User>;