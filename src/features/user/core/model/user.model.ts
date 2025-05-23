export interface User {
  _id: number;
  uuid: string;
  username: string;
  nickname: string;
  email: string;
  agreements: Agreement;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export interface Agreement {
  privacyPolicy: boolean;
  terms: boolean;
  notMinority: boolean;
}