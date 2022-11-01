import axios from 'axios';

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error('API_URL is not defined');
}

const API = axios.create({
  baseURL: `${API_URL}api/v2/`,
  data: {},
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  },
});

export default API;
