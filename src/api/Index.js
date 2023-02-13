import axios from 'axios';

const Client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Client.interceptors.request.use(
  function (config) {
    if (config.method === 'POST' || config.method === 'PUT') {
      config.headers.post['Content-Type'] = 'multipart/form-data';
    }
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default Client;
