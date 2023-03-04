import clsx from 'clsx';

import { messages } from '@/lib/data';

const MailListItem = ({
  message,
  idx,
}: {
  message: (typeof messages)[0];
  idx: number;
}) => {
  return (
    <li
      key={message.id}
      className={clsx(
        'relative bg-white py-5 pl-4 pr-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50',
        idx === 0
          ? 'rounded-t-lg'
          : idx === messages.length - 1
          ? 'rounded-b-lg'
          : ''
      )}
    >
      <div className='flex justify-between space-x-3'>
        <div className='min-w-0 flex-1'>
          <a href='#' className='block focus:outline-none'>
            <span className='absolute inset-0' aria-hidden='true' />
            <div className='flex items-end justify-start space-x-1'>
              <p className='truncate text-sm font-medium text-gray-900'>
                {message.sender}
              </p>
              {/* <p className='text-sm opacity-60'>{message.email}</p> */}
            </div>
            <p className='mt-3 truncate text-sm text-gray-500'>
              {message.subject}
            </p>
          </a>
        </div>
        <time
          dateTime={message.datetime}
          className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500'
        >
          {message.time}
        </time>
      </div>
      <div className='mt-1'>
        <p className='line-clamp-2 text-sm text-gray-600'>{message.preview}</p>
      </div>
    </li>
  );
};

export default MailListItem;
