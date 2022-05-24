import React from 'react';
import './style.css';
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg';
import { ReactComponent as LeftArrow } from '../../assets/icons/arrow-left.svg';
import coconutImage from '../../assets/coconut.png';
import DropDown from '../Dropdown';
import Button from '../Button';

const cartData = [
  {
    item_name: 'Okazi Leaves',
    item_price: 30,
    bid: ['Mary'],
    image: coconutImage,
    kg: [1, 2, 3, 4],
  },
  {
    item_name: 'Okazi Leaves',
    item_price: 120,
    bid: ['Ruth'],
    image: coconutImage,
    kg: [1, 2, 3, 4],
  },
  {
    item_name: 'Rice Bean Leave',
    item_price: 50,
    bid: ['Mary', 'Praise'],
    image: coconutImage,
    kg: [1, 2, 3, 4],
  },
  {
    item_name: 'Efo Stew Ingredient',
    item_price: 45,
    bid: ['Mary'],
    image: coconutImage,
    kg: [1, 2, 3, 4],
  },
];

export default function Cart() {
  const [toggleCart, setToggleCart] = React.useState(false);

  return (
    <div className='absolute top-0 right-0 w-full h-full'>
      {!toggleCart && (
        <div
          onClick={() => setToggleCart(!toggleCart)}
          className='custom-position'
        >
          <FloatingIcon />
        </div>
      )}
      {toggleCart && (
        <div className='shadow-lg fixed h-full  w-full md:w-4/12 p-4 right-0 bg-white'>
          <div className='flex flex-col justify-between h-full'>
            <div>
              <div className='flex items-center justify-between'>
                <div className='flex gap-8 items-center'>
                  <div
                    onClick={() => setToggleCart(!toggleCart)}
                    className='cursor-pointer'
                  >
                    <LeftArrow />
                  </div>
                  <h4 className='font-bold text-lg'>My Cart</h4>
                </div>
                <FloatingIcon />
              </div>

              <div>
                {cartData.map((item, index) => {
                  return <CartCard key={index} {...item} />;
                })}
              </div>
            </div>

            <div className='border-t-2 border-gray-100 py-2 flex justify-between items-center'>
              <div>
                <p className='text-gray-600 text-sm'>Total</p>
                <h3 className='font-bold text-lg'>$2,560</h3>
              </div>
              <div onClick={() => setToggleCart(!toggleCart)}>
                <Button value='DONE SHOPPING' />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FloatingIcon() {
  return (
    <div className='floating-cart-icon cursor-pointer btn-effect flex items-center justify-center bg-teal w-16 h-16 rounded-full relative'>
      <BasketIcon />
      <div className='badge bg-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center'>
        <p className='font-bold'>4</p>
      </div>
    </div>
  );
}

function CartCard(props) {
  return (
    <div className='grid grid-cols-2 gap-8 my-4 bg-green px-4 py-6 rounded-lg'>
      <div className='grid grid-flow-col auto-cols-max place-items-center gap-2'>
        <div className='flex items-center justify-center w-12 h-12 px-2 md:w-16 md:px-3 md:h-16 rounded-full bg-green'>
          <img src={props.image} alt={props.item_name} />
        </div>
        <div>
          <p className='text-sm text-gray-700'>
            {props.item_name <= 11
              ? props.item_name
              : `${props.item_name.substring(0, 12)}...`}
          </p>
          <h3 className='font-bold text-lg md:text-xl'>${props.item_price}</h3>
        </div>
      </div>

      <div className='grid grid-cols-2 place-items-center w-full'>
        <div className='flex flex-row-reverse'>
          <DropDown selectedItem={props.kg[0]} items={props.kg} />
        </div>
        <div className='flex flex-row-reverse w-full'>
          {props.bid.length >= 2 ? (
            <div className=' relative'>
              <div className='absolute top-0 right-6 -z-2 bg-green-400 rounded-full w-10 h-10 text-white font-bold flex items-center justify-center'>
                {props.bid[0][0]}
              </div>
              <div className='relative z-50 bg-blue-400 rounded-full w-10 h-10 text-white font-bold flex items-center justify-center'>
                {props.bid[1][0]}
              </div>
            </div>
          ) : (
            <div className='bg-green-900 rounded-full w-10 h-10 text-white font-bold flex items-center justify-center'>
              {props.bid[0][0]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
