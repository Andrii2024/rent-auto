import axios from 'axios';

export const userApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  userApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeToken = () => {
  userApi.defaults.headers.common.Authorization = ``;
};
