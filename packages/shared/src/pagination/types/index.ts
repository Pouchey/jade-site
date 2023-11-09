export interface IPaginatedResult<T> {
  items: T[];
  meta: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
    prev: number | null;
    next: number | null;
  };
}
