import { IPaginatedResult } from '@jaderowley/shared/src/pagination/types';

export const getPagination = (page = 1, perPage = 10) => {
  const skip = page > 0 ? perPage * (page - 1) : 0;
  const take = perPage;

  return { skip, take };
};

export const paginate = <T>(
  items: T[],
  skip: number,
  take: number,
  total: number,
): IPaginatedResult<T> => {
  const currentPage = skip / take + 1;
  const lastPage = Math.ceil(total / take);
  const prev = currentPage > 1 ? currentPage - 1 : null;
  const next = currentPage < lastPage ? currentPage + 1 : null;

  return {
    items,
    meta: {
      currentPage,
      lastPage,
      perPage: take,
      total,
      prev,
      next,
    },
  };
};
