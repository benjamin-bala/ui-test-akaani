import React from 'react';

export default function Button(props) {
  return (
    <div className='btn-effect inline-block btn-custom text-white rounded cursor-pointer text-center px-4 py-3'>
      <p className='text-sm'>{props.value}</p>
    </div>
  );
}
