import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { RiSendPlane2Fill } from 'react-icons/ri';

import { sendMail } from '@/lib/api';

const MailCompose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [toAddr, setToAddr] = useState('varun@0xparc.space');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [btnText, setBtnText] = useState('Send');

  const [pswd, setPswd] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('userData');

    if (!user) {
      return window.location.replace('/login');
    }

    setPswd(JSON.parse(user).password);
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative w-[600px] transform flex-col items-start justify-start overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all sm:my-8 '>
                <div className='w-full rounded-lg border border-black border-opacity-10 p-2'>
                  <div className='flex items-start justify-start border-b p-2'>
                    <span className='opacity-50'>To: </span>
                    <input
                      defaultValue='varun@0xparc.space'
                      onChange={(e) => setToAddr(e.target.value)}
                      className='ml-2 w-full focus:outline-none'
                    />
                  </div>

                  <div className='flex items-start justify-start border-b p-2'>
                    <span className='opacity-50'>Subject: </span>
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      className='ml-2 w-full focus:outline-none'
                    />
                  </div>

                  <div className='flex flex-col items-start justify-start p-2'>
                    {/* <span className='opacity-50'>Message: </span> */}
                    <textarea
                      placeholder='Type your message here..'
                      onChange={(e) => setMsg(e.target.value)}
                      className='mt-2 h-32 w-full rounded-lg border-0 bg-gray-400 bg-opacity-5 p-2 placeholder:opacity-40 focus:border-transparent focus:outline-none  focus:ring-0 active:outline-none'
                    />
                  </div>
                </div>

                <div className='mt-4 flex items-end justify-end'>
                  <button
                    onClick={() => {
                      setBtnText('Sending');
                      sendMail({
                        from: 'aayush@0xparc.space',
                        body: msg,
                        to: toAddr,
                        sub: subject,
                        pswd: pswd,
                      }).then((res) => {
                        if (res?.status === 200) {
                          setBtnText('Mail Sent');
                          setTimeout(() => {
                            setOpen(false);
                          }, 600);
                        } else {
                          setBtnText('Error in Sending Mail');
                          setTimeout(() => {
                            setOpen(false);
                          }, 600);
                        }
                      });
                    }}
                    className={clsx(
                      'rounded-full border-transparent  px-6 py-3 text-sm font-semibold text-white text-opacity-90  transition ease-in-out selection:outline-none hover:scale-105 hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:scale-95',
                      btnText === 'Mail Sent' ? 'bg-green-600' : 'bg-sky-900'
                    )}
                  >
                    <div className='flex items-center justify-center'>
                      <p>{btnText}</p>
                      {btnText === 'Send' ? (
                        <RiSendPlane2Fill className='ml-2 h-3 w-3' />
                      ) : btnText === 'Sending' ? (
                        <BsThreeDots className='ml-2 h-3 w-3' />
                      ) : btnText === 'Mail Sent' ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='ml-2 h-3 w-3'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M4.5 12.75l6 6 9-13.5'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='ml-2 h-3 w-3'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MailCompose;
