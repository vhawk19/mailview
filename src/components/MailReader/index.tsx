const MailReader = ({ selectedMail }) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center bg-white p-5 md:rounded-lg'>
      <div className='flex w-[100%] items-center justify-between'>
        {selectedMail.id ? (
          <>
            <div className='flex flex-col items-start justify-between'>
              <p className='text-md opacity-90'>{selectedMail.subject}</p>
              <div className='mt-2 flex flex-col justify-between md:flex-row'>
                <p className='text-sm opacity-50'>From:</p>
                <p className='text-sm opacity-70'> {selectedMail.sender}</p>
                <p className='mx-3 hidden opacity-40 md:block'>|</p>
                <p className='text-sm opacity-50'>To:</p>
                <p className='text-sm opacity-70'>{selectedMail.toEmail}</p>
              </div>
            </div>

            <div className='mb-auto flex flex-col items-end justify-between'>
              <p className='text-sm opacity-70'>
                {new Date(selectedMail.datetime).toDateString()}
              </p>
            </div>
          </>
        ) : (
          ''
        )}
      </div>

      <div className='m-5 h-full w-full overflow-scroll border-t border-black border-opacity-10 bg-gray-50'>
        {!selectedMail.id ? (
          <p className='mt-7 text-center text-slate-600'>
            Please select a mail to view
          </p>
        ) : (
          <div className='p-4'>
            <div dangerouslySetInnerHTML={{ __html: selectedMail.email }}></div>
            {/* {console.log(selectedMail.email)} {parse(selectedMail.email)} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MailReader;
