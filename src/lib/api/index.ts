import axios from 'axios';
import { useQuery } from 'react-query';

export const getServerURL = () => {
  return 'https://tangy-tail-production.up.railway.app/api/';
};

export const get = (url: string) => {
  return axios.get(getServerURL() + url, {
    headers: {
      Authorization: 'Basic ' + localStorage.getItem('auth'),
    },
  });
};

export const post = (url: string, data: object) => {
  return axios.post(
    getServerURL() + url,
    { ...data, username: '', password: '' },
    {
      headers: {
        Authorization: 'Basic ' + localStorage.getItem('auth'),
      },
    }
  );
};

export const useGetMails = (option = {}) =>
  useQuery(['Mails'], getMails, { ...option });

const getMails = () => {
  return post(`messages/`, {});
};
