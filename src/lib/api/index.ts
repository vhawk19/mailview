import axios from 'axios';
import { useQuery } from 'react-query';

export const getServerURL = () => {
  return 'https://tangy-tail-production.up.railway.app/api/';
};

export const post = (url: string, data = {}) => {
  return axios.post(
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

export const logIn = ({
  username,
  pswd,
}: {
  username: string;
  pswd: string;
}) => {
  post(`login/`, { username: username, password: pswd }).then((res) => {
    if (res.status === 200) {
      localStorage.setItem(
        'userData',
        JSON.stringify({ email: username, password: pswd })
      );
      window.location.replace('/');
    }
  });
};

export const signUp = ({
  username,
  pswd,
  host,
}: {
  username: string;
  pswd: string;
  host: string;
}) => {
  post(`signup/`, { username: username, password: pswd, hostname: host }).then(
    (res) => {
      if (res.status === 200) {
        localStorage.setItem(
          'userData',
          JSON.stringify({ email: username, password: pswd })
        );
        window.location.replace('/');
      }
    }
  );
};
