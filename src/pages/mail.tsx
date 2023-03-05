// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import MailReader from '@/components/MailReader';

export default function HomePage() {
  const [message, setMessage] = React.useState({});

  React.useEffect(() => {
    setMessage(JSON.parse(localStorage.getItem('mail') || ''));
  }, []);

  return (
    <Layout>
      <div className='flex h-full justify-center space-x-4 md:h-[90vh] md:rounded-lg'>
        <MailReader selectedMail={message} />
      </div>
    </Layout>
  );
}
