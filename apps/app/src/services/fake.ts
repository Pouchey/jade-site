import { randInt } from '_utils/random';

/**
 * Simulate fake request with latency, error, logger, etc/
 */

/* eslint-disable no-console */

const sleep = (duration = randInt(200, 600)) =>
  new Promise((resolve) => setTimeout(resolve, duration));

/**
 * Logger to log request in the browser console
 */
const logAPI = (url, body, data) => {
  console.log(
    `%c  WSERVICE  ${url}`,
    'background-color: #567ebd; color: white;'
  );
  if (body)
    console.log('%c  BODY  ', 'background-color: #5C5C5C; color: white;', body);
  if (data)
    console.log(
      '%c  RESPONSE  ',
      'background-color: #5C5C5C; color: white;',
      data
    );
};

/**
 * Fake request for API tests
 * @param  {Json}   data    the fake data that simulate API response
 * @param  {String} url     the url of the request
 * @param  {Object} body    the body of the request
 * @param  {Number} status  the server response to simulate success and error
 * @param  {String} error   the error message
 * @param  {Number} latency the delay of the request
 */
export default async (
  data,
  url,
  body,
  status = 200,
  error = null,
  latency,
  headers
) => {
  logAPI(
    `${import.meta.env.VITE_API_URL || 'API_URL'}${
      url.endsWith('?') ? url.slice(0, -1) : url
    }`,
    body,
    data
  );
  await sleep(latency);

  if (error) throw error;

  return { status, data, headers };
};
