import { randInt } from '_utils/random';

const sleep = (duration = randInt(200, 600)) =>
  new Promise((resolve) => setTimeout(resolve, duration));

const logRequest = (url: string, body: unknown, data: unknown) => {
  console.info(
    `%c  REQUEST  ${url}  `,
    'background-color: #2f6e40; color: white;',
  );
  if (body)
    console.info(
      '%c  BODY  ',
      'background-color: #939dba; color: white;',
      body,
    );
  if (data)
    console.info(
      '%c  RESPONSE  ',
      'background-color: #939dba; color: white;',
      data,
    );
};

const fakeRequest = async <R, B = unknown>(
  data: R,
  url: string,
  body: B | null = null,
  status = 200,
  error = null,
  latency = randInt(200, 600),
  headers = {},
) => {
  logRequest(
    `${import.meta.env.VITE_API_URL || 'API_URL'}${
      url.endsWith('?') ? url.slice(0, -1) : url
    }`,
    body,
    data,
  );
  await sleep(latency);

  if (error) throw error;

  return { status, data, headers };
};

export default fakeRequest;
