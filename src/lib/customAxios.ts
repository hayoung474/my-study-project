import axios, { AxiosInstance } from 'axios';

export const customAxios: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 100000000,
  headers: { 'Content-Type': 'application/json' },
});
