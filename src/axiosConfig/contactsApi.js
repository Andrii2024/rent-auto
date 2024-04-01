import axios from 'axios';

export const contactsApi = axios.create({
  baseURL: 'https://65e5cbd3d7f0758a76e76b61.mockapi.io/',
});

export const setToken = token => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeToken = () => {
  contactsApi.defaults.headers.common.Authorization = ``;
};
