import axios from 'axios';
import { useQuery } from 'react-query';

export const getServerURL = () => {
  return 'https://tangy-tail-production.up.railway.app/api/';
};

export const post = (url: string, data = {}) => {
  axios.post(
    getServerURL() + url,
    { ...data },
    {
      headers: {
        Authorization: 'Basic ' + localStorage.getItem('auth'),
      },
    }
  );
};

export const get = (url: string) => {
  return axios.get(getServerURL() + url, {
    headers: {
      Authorization: 'Basic ' + localStorage.getItem('auth'),
    },
  });
};

export const useGetMails = (option = {}) =>
  useQuery(['Mails'], getMails, { ...option });

const getMails = () => {
  return get(`messages`);
};

export const signIn = ({
  username,
  pswd,
}: {
  username: string;
  pswd: string;
}) => {
  post(`login`, { username: username, password: pswd });
  return window.location.replace(`/`);
};
