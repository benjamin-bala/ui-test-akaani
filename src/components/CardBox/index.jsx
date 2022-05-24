import React from 'react';

export default function CardBox(props) {
  return (
    <div className='grid grid-cols-3 md:flex flex-wrap justify-center items-center bg-white rounded-lg shadow-custom px-8 py-4 w-full md:w-auto'>
      <div
        className={`mr-4 ${props.color} flex justify-center items-center w-16 h-16 rounded-full`}
      >
        {props.icon}
      </div>
      <div className=' md:my-2'>
        <p className='text-sm text-gray-600'>{props.title}</p>
        <p className='text-lg md:text-xl font-bold'>{props.value}</p>
      </div>
    </div>
  );
}
