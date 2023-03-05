import * as React from 'react';
import { RiPencilFill } from 'react-icons/ri';

import { useIsMobile } from '@/lib/hooks';

import Layout from '@/components/layout/Layout';
import MailList from '@/components/layout/MailList';
import MailCompose from '@/components/MailCompose';
import MailReader from '@/components/MailReader';

export default function HomePage() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  return (
    <Layout>
      <div className='flex justify-center space-x-4 md:h-[90vh] md:rounded-lg'>
        <MailCompose setOpen={setOpen} open={open} />
        <button
          onClick={() => setOpen(true)}
          className='text-md absolute left-14 flex items-center justify-center rounded-full bg-sky-900 px-6 py-3 text-sm font-semibold text-white text-opacity-90 transition ease-in-out hover:scale-105 hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:scale-95'
        >
          New Message
          <RiPencilFill className='ml-2' />
        </button>
        <MailList />
        {!isMobile && <MailReader />}
      </div>
    </Layout>
  );
}
