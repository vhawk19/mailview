import * as React from 'react';

import Layout from '@/components/layout/Layout';
import MailReader from '@/components/MailReader';

export default function HomePage() {
  return (
    <Layout>
      <div className='flex h-full justify-center space-x-4 md:h-[90vh] md:rounded-lg'>
        <MailReader />
      </div>
    </Layout>
  );
}
