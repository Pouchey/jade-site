import axios from 'axios';

const httpRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/`,
  data: {},
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  },
});

export default httpRequest;
