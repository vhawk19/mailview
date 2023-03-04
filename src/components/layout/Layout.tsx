import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex min-h-screen'>
      <div className='container mx-auto max-w-6xl md:my-7'>{children}</div>
    </div>
  );
}
