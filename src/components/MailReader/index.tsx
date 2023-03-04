const MailReader = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center rounded-lg bg-white p-5 shadow-2xl'>
      <div className='flex w-[100%] items-center justify-between'>
        <div className='flex flex-col items-start justify-between'>
          <p className='text-md opacity-90'>Varun Krishna</p>
          <div className='flex items-center justify-between space-x-2'>
            <p className='text-sm opacity-50'>From:</p>
            <p className='text-sm opacity-70'> varun0xparc.space</p>
            <p className='mx-3 opacity-40'>|</p>
            <p className='text-sm opacity-50'>To:</p>
            <p className='text-sm opacity-70'> me@0xparc.space</p>
          </div>
        </div>

        <div className='flex flex-col items-end justify-between'>
          <p className='text-sm opacity-70'>2022, June 22, 10:30 AM</p>
          <div className='mt-2 flex items-end justify-evenly space-x-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='h-4 w-4 opacity-50'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='h-4 w-4 opacity-50'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='h-4 w-4 opacity-50'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
              />
            </svg>
          </div>
        </div>
      </div>

      <div className='m-5 h-full w-full border-t border-black border-opacity-10 bg-gray-50'></div>
    </div>
  );
};

export default MailReader;
