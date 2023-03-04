import { messages } from '@/lib/data';

import MailListItem from '@/components/MailListItem';

const MailList = () => {
  return (
    <ul
      role='list'
      className='h-full w-96 divide-y divide-gray-200 overflow-auto rounded-lg bg-white'
    >
      {messages.map((message, idx) => (
        <MailListItem key={idx} message={message} idx={idx} />
      ))}
    </ul>
  );
};

export default MailList;
