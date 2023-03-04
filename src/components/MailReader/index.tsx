const MailReader = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center bg-white p-5 md:rounded-lg'>
      <div className='flex w-[100%] items-center justify-between'>
        <div className='flex flex-col items-start justify-between'>
          <p className='text-md opacity-90'>Varun Krishna</p>
          <div className='flex flex-col justify-between md:flex-row md:space-x-2'>
            <p className='text-sm opacity-50'>From:</p>
            <p className='text-sm opacity-70'> varun0xparc.space</p>
            <p className='mx-3 hidden opacity-40 md:block'>|</p>
            <p className='text-sm opacity-50'>To:</p>
            <p className='text-sm opacity-70'> me@0xparc.space</p>
          </div>
        </div>

        <div className='mb-auto flex flex-col items-end justify-between'>
          <p className='text-sm opacity-70'>2022, June 22, 10:30 AM</p>
        </div>
      </div>

      <div className='m-5 h-full w-full border-t border-black border-opacity-10 bg-gray-50'></div>
    </div>
  );
};

export default MailReader;
