import { useState } from 'react';

import { signIn } from '@/lib/api';

const SignIn = () => {
  const [pswd, setPswd] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-light tracking-tight text-gray-900'>
            Sign in to mail
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 sm:rounded-lg sm:px-10'>
            <div className='space-y-6'>
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
                <button
                  onClick={() =>
                    signIn({
                      username: email,
                      pswd: pswd,
                    })
                  }
                  className='mt-10 mb-4 flex w-full justify-center rounded-md bg-gray-900 py-4 px-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
