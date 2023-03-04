import * as React from 'react';

import Layout from '@/components/layout/Layout';
import MailList from '@/components/layout/MailList';
import MailReader from '@/components/MailReader';

export default function HomePage() {
  return (
    <Layout>
      <div className='flex h-[90vh] justify-center space-x-4 rounded-lg'>
        <MailList />
        <MailReader />
      </div>
    </Layout>
  );
}
