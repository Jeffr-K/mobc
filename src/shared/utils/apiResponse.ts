export interface ApiResponse<T> {
  data: T;
  statusCode: number;
}

export interface Pagination<T> {
  items: T[];
  total: number;
  pageCount: number;
  currentPage: number;
  pageSize: number;
}
