import clsx from 'clsx';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { RiPencilFill } from 'react-icons/ri';

import { useIsMobile, useIsTablet } from '@/lib/hooks';

import Layout from '@/components/layout/Layout';
import MailList from '@/components/layout/MailList';
import MailCompose from '@/components/MailCompose';

const MailReader = dynamic(import('@/components/MailReader'), { ssr: false });

export default function HomePage() {
  const isMobile = useIsMobile();
  const [selectedMail, setSelectedMail] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const isTablet = useIsTablet();

  return (
    <Layout>
      <div className='mt-10 flex justify-center space-x-4 md:h-[90vh] md:rounded-lg'>
        <MailList
          selectedMail={selectedMail}
          setSelectedMail={setSelectedMail}
        />
        <button
          onClick={() => setOpen(true)}
          className='text-md fixed left-8 top-6 flex items-center justify-center rounded-full bg-sky-900 px-6 py-3 text-sm font-semibold text-white text-opacity-90 transition ease-in-out hover:scale-105 hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:scale-95'
        >
          {isTablet ? '' : 'New Message'}
          <RiPencilFill className={clsx(isTablet ? '' : 'ml-2')} />
        </button>
        <MailCompose setOpen={setOpen} open={open} />
        {!isMobile && <MailReader selectedMail={selectedMail} />}
      </div>
    </Layout>
  );
}
