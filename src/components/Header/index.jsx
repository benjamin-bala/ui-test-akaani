import React from 'react';
import SearchBox from '../Searchbox';

export default function Header() {
  return (
    <header className='py-4'>
      <div className='flex justify-between items-center py-3 '>
        <div className='flex items-center'>
          <h2 className='text-gray-900 text-3xl font-bold'>
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
