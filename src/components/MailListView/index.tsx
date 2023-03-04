import * as React from 'react';

import Avatar from '@/components/Avatar';

interface IMailListViewProps {
  subject: string;
  senderName: string;
  senderEmail: string;
  body: string;
}

export default function MailListView({
  subject,
  senderName,
  senderEmail,
  body,
}: IMailListViewProps) {
  return (
    <div className='mt-4 border-t-2 border-slate-300'>
      <div className='mt-4 flex'>
        <div className='my-auto'>
          <Avatar />
        </div>
        <div className='ml-2 flex flex-col'>
          <p className='text-sm font-medium text-slate-700'>{subject}</p>
          <div className='text-sm font-medium text-slate-700'>
            <span>{senderName}</span>{' '}
            <span className='font-light text-slate-500'>{senderEmail}</span>
          </div>
        </div>
      </div>
      <p className='mt-2 text-slate-800'>{body}</p>
    </div>
  );
}
