import * as React from 'react';

export default function Loader() {
  return (
    <div className='p-4'>
      <div className='flex animate-pulse space-x-4'>
        <div className='flex-1 space-y-6 py-1'>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-2 h-2 rounded bg-slate-200'></div>
              <div className='col-span-1 h-2 rounded bg-slate-200'></div>
            </div>
            <div className='h-2 rounded bg-slate-200'></div>
            <div className='h-2 rounded bg-slate-200'></div>
            <div className='h-2 rounded bg-slate-200'></div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex animate-pulse space-x-4'>
        <div className='flex-1 space-y-6 py-1'>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-2 h-2 rounded bg-slate-200'></div>
              <div className='col-span-1 h-2 rounded bg-slate-200'></div>
            </div>
            <div className='h-2 rounded bg-slate-200'></div>
            <div className='h-2 rounded bg-slate-200'></div>
            <div className='h-2 rounded bg-slate-200'></div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex animate-pulse space-x-4'>
        <div className='flex-1 space-y-6 py-1'>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-2 h-2 rounded bg-slate-200'></div>
              <div className='col-span-1 h-2 rounded bg-slate-200'></div>
            </div>
            <div className='h-2 rounded bg-slate-200'></div>
            <div className='h-2 rounded bg-slate-200'></div>
            <div className='h-2 rounded bg-slate-200'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
