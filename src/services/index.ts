export const httpAPI = {};
export const fakeAPI = {};

export default () => (process.env.API_MODE === 'http' ? httpAPI : fakeAPI);
