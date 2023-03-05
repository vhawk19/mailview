import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';

const MailCompose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
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
              <Dialog.Panel className='relative flex w-full transform flex-col overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all sm:my-8 sm:max-w-md'>
                <div>
                  <div className='overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-sky-800 focus-within:ring-1 focus-within:ring-sky-800'>
                    <div className='border-none'>
                      <div className='relative mt-2 rounded-md border-none shadow-sm'>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                          <span className='text-gray-500 sm:text-sm'>To: </span>
                        </div>
                        <input
                          type='text'
                          name='price'
                          id='price'
                          className='ml-2 block w-full rounded-md border-0 border-none py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          placeholder='email'
                        />
                      </div>
                    </div>

                    <label htmlFor='title' className='sr-only'>
                      Subject
                    </label>
                    <input
                      type='text'
                      name='title'
                      id='title'
                      className='block w-full border-b border-black border-opacity-5 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0'
                      placeholder='Subject'
                    />
                    <label htmlFor='description' className='sr-only'>
                      Description
                    </label>
                    <textarea
                      rows={2}
                      name='description'
                      id='description'
                      className='block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='Write your mail...'
                      defaultValue=''
                    />

                    {/* Spacer element to match the height of the toolbar */}
                    <div aria-hidden='true'>
                      <div className='py-2'>
                        <div className='h-9' />
                      </div>
                      <div className='h-px' />
                      <div className='py-2'>
                        <div className='py-px'>
                          <div className='h-9' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=''></div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full items-center justify-center rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={() => setOpen(false)}
                  >
                    Send
                    <RiSendPlane2Fill className='ml-4' />
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
