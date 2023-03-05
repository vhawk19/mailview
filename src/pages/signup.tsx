import clsx from 'clsx';
import { useState } from 'react';

import { signUp } from '@/lib/api';

const SignUp = () => {
  const [pswd, setPswd] = useState('');
  const [email, setEmail] = useState('');
  const [host, setHost] = useState('');
  const [smtp, setSmtp] = useState('465');
  const [pop, setPop] = useState('995');
  const [btnText, setBtnText] = useState('Sign Up');

  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-md'>
        {btnText === 'Processing' || btnText === 'Successful!' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-14 w-14 text-sky-900'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-14 w-14 text-sky-900'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
            />
          </svg>
        )}
        <h2 className='mt-6 text-center text-3xl font-light tracking-tight text-gray-900'>
          Sign up to mail
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 sm:rounded-lg sm:px-10'>
          <div className='space-y-6'>
            <div>
              <label
                htmlFor='host'
                className='block text-sm font-normal leading-6 text-gray-700'
              >
                Enter your host
              </label>
              <div className='mt-2'>
                <input
                  id='host'
                  name='host'
                  type='text'
                  onChange={(e) => setHost(e.target.value)}
                  required
                  className='block h-12 w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-normal leading-6 text-gray-700'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='block h-12 w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-normal leading-6 text-gray-700'
              >
                Password
              </label>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  onChange={(e) => setPswd(e.target.value)}
                  required
                  className='block h-12 w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='pop'
                className='block text-sm font-normal leading-6 text-gray-700'
              >
                POP Port
              </label>
              <div className='mt-2'>
                <input
                  id='pop'
                  name='pop'
                  type='text'
                  defaultValue={995}
                  onChange={(e) => setPop(e.target.value)}
                  required
                  className='block h-12 w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='smtp'
                className='block text-sm font-normal leading-6 text-gray-700'
              >
                SMTP Port
              </label>
              <div className='mt-2'>
                <input
                  id='smtp'
                  name='smtp'
                  type='text'
                  defaultValue={465}
                  onChange={(e) => setSmtp(e.target.value)}
                  required
                  className='block h-12 w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  setBtnText('Processing');
                  signUp({
                    username: email,
                    pswd: pswd,
                    host: host,
                    smtp: smtp,
                    pop: pop,
                  }).then((res) => {
                    if (res && res.status === 200) {
                      setBtnText('Successful');
                      setTimeout(() => {
                        window.location.replace('/');
                        setBtnText('Login');
                      }, 600);
                    }
                  });
                }}
                className={clsx(
                  'mt-10 mb-4 flex w-full justify-center rounded-md py-4 px-3 text-sm font-semibold text-white transition ease-in-out hover:scale-105 hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:scale-95',
                  btnText === 'Processing'
                    ? 'bg-amber-600'
                    : btnText === 'Successful!'
                    ? 'bg-green-600'
                    : 'bg-sky-900'
                )}
              >
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
