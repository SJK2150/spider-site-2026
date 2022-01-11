import axios from 'axios';

const Client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

Client.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default Client;
