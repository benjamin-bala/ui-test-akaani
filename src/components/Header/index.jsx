import React from 'react';
import SearchBox from '../Searchbox';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export default function Header() {
  return (
    <header className='py-4'>
      <div className='md:hidden my-3'>
        <Logo />
      </div>
      <div className='flex flex-wrap gap-2 justify-between items-center py-3 '>
        <div className='flex items-center'>
          <h2 className='text-gray-900 text-xl md:text-3xl font-bold'>
            Good Evening, Laura!
          </h2>
        </div>
        <div>
          <SearchBox />
        </div>
      </div>
    </header>
  );
}
