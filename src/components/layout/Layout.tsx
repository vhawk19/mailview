import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex min-h-screen'>
      <div className='container my-7 mx-auto max-w-6xl'>{children}</div>;
    </div>
  );
}
