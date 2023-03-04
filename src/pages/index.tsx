import * as React from 'react';

import Layout from '@/components/layout/Layout';
import MailListView from '@/components/MailListView';

export default function HomePage() {
  return (
    <Layout>
      <div>
        <h1 className='my-4 text-xl font-medium text-slate-700'>Inbox</h1>
      </div>
      <div>
        <MailListView
          subject='Test Subject'
          senderName='Ameen Azeez '
          senderEmail='<ameen4455@gmail.com>'
          body='lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet egestas ultrices. Maecenas vitae aliquet diam. Nulla a rutrum neque. Ut id massa lacus. Maecenas a magna id odio laoreet interdum at sagittis sem.'
        />
      </div>
    </Layout>
  );
}
