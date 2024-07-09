import React from 'react';
import search_icon from '../assets/icons/search_icon.svg';
import { Link } from 'react-router-dom';
import cart_icon from '../assets/icons/cart-icon.svg';
import heart_icon from '../assets/icons/heart_icon.svg';
import user from '../assets/icons/user.png';
const Header = () => {
  return (
    <div className="pr-custom-mr pl-custom-ml py-[20px] ">
      <div className='mx-auto max-w-[2200px] w-full flex items-center justify-between'>
        <div className="font-Messiri text-[2rem] text-primaryblack font-bold">TIMBU</div>

        <div className="flex w-[900px] ">
          <input
            className=" w-full border  border-solid border-greyborder rounded-l-md px-[.5rem] py-[.5rem] outline-none"
            type="text"
            placeholder="Search Here"
          />
          <div className="flex cursor-pointer items-center px-[.6rem] rounded-r-md bg-browntheme">
            <img
              style={{ fill: 'white' }}
              src={search_icon}
              alt="search icon"
            />
          </div>
        </div>
        <div className="flex gap-[1.625rem] items-center">
          {/* 
           */}
          <div className="w-[48px] h-[48px] rounded-full bg-none flex itemss-center justify-center hover:bg-gray-200 transition">
            <Link to='/cart' className='flex items-center justify-center'><img src={cart_icon} alt="" className="h-[30px] w-[30px]" /></Link>
          </div>
          <div className="w-[45px] h-[45px]">
            <img src={user} alt="user icon" className="w-full h-full" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
