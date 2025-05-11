export interface Category {
  _id: number;
  identifier: {
    uuid: string;
    version: number;
  };
  name: string;
  parent: Category | null;
  timestamp: {
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
  };
}
