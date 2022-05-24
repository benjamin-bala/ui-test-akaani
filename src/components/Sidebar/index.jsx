import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/user-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg';
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg';
import { ReactComponent as HistoryIcon } from '../../assets/icons/history.svg';

export default function Sidebar() {
  return (
    <div className='hidden md:flex flex-col justify-between px-5 py-3 border-gray-100 border-r-2 '>
      <div className='flex flex-col justify-around'>
        <div className='flex justify-center items-center mb-5 my-3'>
          <Logo />
        </div>

        <div className='my-5'>
          <div className='cursor-pointer btn-effect flex items-center my-5 py-4'>
            <div>
              <ProfileIcon />
            </div>
            <div className='ml-4'>
              <p className='text-lg text-gray-600'>Profile</p>
            </div>
          </div>

          <div className='cursor-pointer btn-effect flex items-center my-5 bg-teal p-4 rounded-lg'>
            <div>
              <BasketIcon />
            </div>
            <div className='ml-4'>
              <p className='text-lg text-white'>Baskets</p>
            </div>
          </div>

          <div className='cursor-pointer btn-effect flex items-center my-5 py-4'>
            <div>
              <HistoryIcon />
            </div>
            <div className='ml-4'>
              <p className='text-lg text-gray-600'>Order History</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center w-16 h-16 rounded-full bg-teal'>
            <span className='text-white font-bold text-xl'>LE</span>
          </div>
          <div className='text-center my-3'>
            <h3 className='text-lg text-gray-900 font-bold'>Lara Edson</h3>
            <p className='text-gray-400 text-sm'>lauraedson@work.com</p>
          </div>
        </div>

        <div className='my-4'>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
}
