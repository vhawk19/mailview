import * as React from 'react';
import { BsPersonFill } from 'react-icons/bs';

export default function Avatar() {
  return (
    <div className='flex h-10 w-10 rounded-full bg-slate-400'>
      <div className='mx-auto my-auto'>
        <BsPersonFill size={24} className=' text-slate-800' />
      </div>
    </div>
  );
}
