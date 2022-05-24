import React from 'react';
import './style.css';
import Button from '../Button';
import { ReactComponent as ShopIcon } from '../../assets/icons/shop.svg';

export default function Baskets() {
  return (
    <div>
      <div className='my-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold text-gray-900'>Baskets</h2>
        <Button value='Create Basket' />
      </div>

      <div className='border-b-2 flex align-items-center gap-6'>
        <div className='cursor-pointer btn-effect px-4 py-1 border-b-2 border-teal'>
          <p className='text-teal font-bold text-sm md:text-lg'>Paid</p>
        </div>
        <div className='cursor-pointer btn-effect px-4 py-1'>
          <p className='text-sm md:text-lg text-gray-400'>Pending</p>
        </div>
        <div className='cursor-pointer btn-effect px-4 py-1'>
          <p className='text-sm md:text-lg text-gray-400'>Completed</p>
        </div>
      </div>

      <div className='flex flex-col h-96 items-center justify-center'>
        <div className='w-24 h-24 rounded-full bg-green flex items-center justify-center shop-icon'>
          <ShopIcon width={50} height={50} />
        </div>
        <div className='my-3'>
          <p className='text-lg text-gray-500'>No paid Baskets, yet!</p>
        </div>
      </div>
    </div>
  );
}
