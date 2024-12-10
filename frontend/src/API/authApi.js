// src/API/authApi.js


import axios from 'axios';

// Set up Axios with token handling
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND, // Your API base URL
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

export const loginUser = async (email, password, role) => {
  try {
    const response = await api.post('/login', { email, password, role });
    return response.data; // Assuming this returns user info and token
  } catch (error) {
    console.error('Login failed', error);
    throw error;
  }
};

export default api;
