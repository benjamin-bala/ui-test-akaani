import React from 'react';
import { ReactComponent as DownArrow } from '../../assets/icons/arrow-down.svg';

export default function DropDown(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectItem, setSelectItem] = React.useState(props.selectedItem);

  const toggleDropDown = () => setIsOpen(!isOpen);

  return (
    <div className='flex relative flex-row-reverse'>
      <div
        onClick={() => toggleDropDown()}
        className='w-max py-1 px-2 md:px-3 cursor-pointer btn-effect shadow bg-white rounded flex items-center'
      >
        <p className='font-semibold text-sm px-1 md:px-2'>{selectItem} kg</p>
        <DownArrow />
      </div>
      {isOpen && (
        <div className='bg-white absolute p-2 top-6 w-full h-max rounded z-10'>
          {props.items.map((item, index) => {
            return (
              <p
                className='text-sm border-y-1 border-gray-100 py-1 cursor-pointer'
                onClick={() => {
                  setSelectItem(item);
                  toggleDropDown();
                }}
              >
                {item} kg
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
