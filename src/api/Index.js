import axios from 'axios';

const Client = axios.create({
  baseURL: 'http://localhost:3001/',
});

Client.interceptors.request.use(
  function (config) {
    if (config.method === 'POST' || config.method === 'PUT') {
      config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default Client;
