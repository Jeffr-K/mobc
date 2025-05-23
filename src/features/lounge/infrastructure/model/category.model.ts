// category.model.ts
export interface CategoryIdentifier {
  uuid: string;
  version: number;
}

export interface CategoryTimestamp {
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export interface CategoryParent {
  _id: number;
  // 필요한 경우 추가 필드
}

export interface Category {
  _id: number;
  identifier: CategoryIdentifier;
  name: string;
  parent?: CategoryParent | null;
  timestamp: CategoryTimestamp;
}
