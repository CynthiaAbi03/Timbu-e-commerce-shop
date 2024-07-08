import React from 'react';
import search_icon from '../assets/icons/search_icon.svg';
import cart_icon from '../assets/icons/cart-icon.svg';
import heart_icon from '../assets/icons/heart_icon.svg';
import user from '../assets/icons/user.png';
const Header = () => {
  return (
    <div className="pr-custom-mr pl-custom-ml py-[20px]">
      <div className='mx-auto max-w-[2200px] w-full flex items-center justify-between'>
        <div className="font-Messiri text-[2rem] text-primaryblack font-bold">TIMBU</div>

        <div className="flex w-[900px] ">
          <input
            className=" w-full border  border-solid border-greyborder rounded-l-md px-[.5rem] py-[.5rem] outline-none"
            type="text"
            placeholder="Search Here"
          />
          <div className="flex items-center px-[.6rem] rounded-r-md bg-browntheme">
            <img
              style={{ fill: 'white' }}
              src={search_icon}
              alt="search icon"
            />
          </div>
        </div>
        <div className="flex gap-[1.625rem] items-center">
          <div className="w-[35px] h-[35px]">
            <img src={heart_icon} className="w-full h-full" alt="" />
          </div>
          <div className="w-[35px] h-[35px]">
            <img src={cart_icon} alt="" className="w-full h-full" />
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