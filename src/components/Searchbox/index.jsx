import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

export default function SearchBox() {
  return (
    <div className='px-3 flex items-center gap-3 border border-gray-100 rounded-lg'>
      <SearchIcon />
      <input
        className='p-2 w-full outline-none'
        placeholder='Search Basket'
        type='search'
      />
    </div>
  );
}
