import { useGetMails } from '@/lib/api';

import MailListItemLoader from '@/components/Loader/MailListItem';
import MailListItem from '@/components/MailListItem';

const transformData = (data) => {
  let res = [];

  if (data?.data?.data?.data?.messages?.length) {
    res = data?.data?.data?.data?.messages.map((message) => {
      return {
        subject: message._message.Subject,
        id: message._mail['message-id'],
        sender: message._message.From,
        time: '',
        datetime: message._message.Date,
        email: message._text_html ? message._text_html : message._text_plain[0],
        preview: message._text_plain[0],
        fromEmail: '',
        toEmail: message._message['Delivered-To'],
      };
    });
  }

  return res;
};

const MailList = ({ selectedMail, setSelectedMail }) => {
  const data = useGetMails();
  const formattedData = transformData(data);

  transformData(data);
  return (
    <ul
      role='list'
      className='h-full w-[540px] divide-y divide-gray-200 overflow-auto rounded-lg bg-white'
    >
      {!data.isLoading ? (
        formattedData.map((message, idx) => (
          <MailListItem
            key={idx}
            message={message}
            idx={idx}
            selectedMail={selectedMail}
            setSelectedMail={setSelectedMail}
          />
        ))
      ) : (
        <MailListItemLoader />
      )}
    </ul>
  );
};

export default MailList;
