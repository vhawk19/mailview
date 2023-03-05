import * as React from 'react';

import { useIsMobile } from '@/lib/hooks';

import Layout from '@/components/layout/Layout';
import MailList from '@/components/layout/MailList';
import MailReader from '@/components/MailReader';

export default function HomePage() {
  const isMobile = useIsMobile();
  const [selectedMail, setSelectedMail] = React.useState({});
  return (
    <Layout>
      <div className='flex justify-center space-x-4 md:h-[90vh] md:rounded-lg'>
        <MailList
          selectedMail={selectedMail}
          setSelectedMail={setSelectedMail}
        />
        {!isMobile && <MailReader selectedMail={selectedMail} />}
      </div>
    </Layout>
  );
}
