import queryString from 'query-string';

export const generateQueryParams = <T>(params: Record<string, T>) =>
  queryString.stringify(params, {
    skipNull: true,
    skipEmptyString: true,
    arrayFormat: 'comma',
  });
