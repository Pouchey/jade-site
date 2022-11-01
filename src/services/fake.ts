import { randInt } from '../utils/random';

/**
 * Simulate fake request with latency, error, logger, etc/
 */

/* eslint-disable no-console */

const sleep = (duration = randInt(200, 600)) =>
  new Promise((resolve) => setTimeout(resolve, duration));

/**
 * Logger to log request in the browser console
 */
const logAPI = (url: string, body: unknown, data: unknown) => {
  console.log(
    `%c  WSERVICE  ${url}`,
    `background-color: #CCFFFF; color: white;`
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
 * @param  {Object} headers the headers of the response to access "Content-type" for instance
 */
export default async (
  data: JSON,
  url: string,
  body: object,
  status = 200,
  error = null,
  latency: number,
  headers: object
) => {
  logAPI(`${process.env.API_URL || 'API_URL'}${url}`, body, data);
  await sleep(latency);

  if (error)
    // eslint-disable-next-line no-throw-literal
    throw {
      response: { data: { message: error, statusCode: status }, status },
    };

  const response = { data, status, headers };

  return response;
};
