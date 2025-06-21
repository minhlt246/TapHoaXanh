// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Backend API URL with /api prefix
});

export default api;
