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

export const sendMail = ({
  from,
  pswd,
  to,
  sub,
  body,
}: {
  from: string;
  pswd: string;
  to: string;
  sub: string;
  body: string;
}) => {
  post('message/', {
    from_addr: from,
    password: pswd,
    to_addr: to,
    subject: sub,
    body: body,
  }).then((res) => {
    if (res.status) {
      return 'mailsent';
    }
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
  smtp,
  pop,
}: {
  username: string;
  pswd: string;
  host: string;
  smtp: string;
  pop: string;
}) => {
  post(`signup/`, {
    email: username,
    password: pswd,
    smtp_username: username,
    smtp_password: pswd,
    smtp_host: host,
    pop_username: username,
    pop_password: pswd,
    pop_host: host,
    host: host,
    smtp_port: smtp,
    pop_port: pop,
  }).then((res) => {
    if (res.status === 200) {
      localStorage.setItem(
        'userData',
        JSON.stringify({ email: username, password: pswd })
      );
      window.location.replace('/');
    }
  });
};
