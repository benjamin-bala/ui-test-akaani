import React from 'react';

export default function CardBox(props) {
  return (
    <div className='flex items-center bg-white rounded-lg shadow-custom px-6 py-4 w-9/12'>
      <div
        className={`mr-4 ${props.color} flex justify-center items-center w-16 h-16 rounded-full`}
      >
        {props.icon}
      </div>
      <div>
        <p className='text-lg text-gray-600'>{props.title}</p>
        <p className='text-2xl font-bold'>{props.value}</p>
      </div>
    </div>
  );
}
