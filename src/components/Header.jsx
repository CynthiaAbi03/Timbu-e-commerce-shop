import React from 'react';
import search_icon from '../assets/icons/search_icon.svg';
import { Link } from 'react-router-dom';
import cart_icon from '../assets/icons/cart-icon.svg';
import heart_icon from '../assets/icons/heart_icon.svg';
import user from '../assets/icons/user.png';
import toggle_icon from '../assets/icons/toggle.svg';
import Checkbox from '@mui/material/Checkbox';
import DynamicCSSVariables from '../components/CustomSlider';
import cross_icon from '../assets/icons/cross.svg';

import { useState } from 'react';

const Header = () => {
  const filterCategory = ['Women', 'Children'];
  const filterSizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  const [isVisible, setIsVisible] = useState(false);
  const closeSidebar = () => {
    setIsVisible(false);
  };
  const openSidebar = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div className="relative pr-custom-mr pl-custom-ml py-[20px] max-sm:pr-[24px] max-sm:pl-[24px] max-sm:fixed max-sm:top-[0px] max-sm:right-[0] max-sm:left-[0] max-sm:bg-white max-sm:z-10 max-sm:shadow-md ">
        {/* sidebar */}
        <div
          className={`absolute px-[30px] shadow-sm flex w-[70%] flex-col gap-[1rem] h-screen py-[30px] top-[0px] transition-all duration-300 bg-white border border-solid  ${
            isVisible ? 'left-[0px]' : 'left-[-100%]'
          }`}
        >
          <div className=" flex justify-between items-center">
            <p className="font-Messiri  flex self-start  p-[0px] text-[2rem]  text-primaryblack font-bold max-sm:text-[1.6rem]">
              TIMBU
            </p>
            <div className="cursor-pointer" onClick={closeSidebar}>
              <img className="h-full w-full" src={cross_icon} alt="close" />
            </div>
          </div>
          <div className="flex flex-col gap-[2rem]">
            <p>Filter By:</p>
            <div className="flex flex-col gap-[.5rem]">
              <p className="font-medium text-[.875rem] text-primaryblack">
                CATEGORY
              </p>
              <div className="flex flex-col gap-[.5rem]">
                <div className="flex items-center gap-[.5rem]">
                  <Checkbox
                    defaultChecked
                    style={{
                      color: '#b05405',
                      padding: '0px',
                      margin: '0px',
                      borderWidth: '1px',
                    }}
                  />
                  <label
                    htmlFor="Men"
                    className="font-light text-[.875rem]  text-primaryblack"
                  >
                    Men
                  </label>
                </div>
                {filterCategory.map((name, index) => (
                  <div key={index} className="flex items-center gap-[.5rem]">
                    <Checkbox
                      style={{
                        padding: '0px',
                        margin: '0px',
                        borderWidth: '1px',
                      }}
                      sx={{
                        color: '',
                        '&.Mui-checked': {
                          color: '#b05405',
                        },
                      }}
                    />
                    <label
                      htmlFor={name}
                      className="font-light text-primaryblack text-[.875rem] "
                    >
                      {name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[.5rem]">
              <p className="font-medium text-[.875rem] text-primaryblack">
                SIZES
              </p>
              <div className="flex flex-col gap-[.5rem]">
                {filterSizes.map((name, index) => (
                  <div key={index} className="flex items-center gap-[.5rem]">
                    <Checkbox
                      style={{
                        padding: '0px',
                        margin: '0px',
                        borderWidth: '1px',
                      }}
                      sx={{
                        color: '',
                        '&.Mui-checked': {
                          color: '#b05405',
                        },
                      }}
                    />
                    <label
                      htmlFor={name}
                      className="font-light text-primaryblack text-[.875rem]"
                    >
                      {name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[.5rem]">
              <p className="font-medium text-[14px]  text-primaryblack">
                PRICES
              </p>
              <div className="flex w-full flex-col gap-[0rem]">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="range"
                    className="font-light text-primaryblack text-[.875rem]"
                  >
                    Range
                  </label>
                  <p className="text-[.875rem]">$120-$1000</p>
                </div>
                <div className="w-full">
                  <DynamicCSSVariables />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* main header */}
        <div className="mx-auto max-w-[2200px] w-full flex items-center justify-between">
          <div className="flex flex-col w-full max-sm:gap-[.5rem]">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-[.5rem]">
                <div
                  onClick={openSidebar}
                  className="hidden h-[25px] w-[25px] max-sm:flex max-sm:items-center max-sm:justify-center"
                >
                  <img src={toggle_icon} className="w-full" alt="toggle_icon" />
                </div>
                <p className="font-Messiri flex self-start p-[0px] text-[2rem]  text-primaryblack font-bold max-sm:text-[1.8rem]">
                  TIMBU
                </p>
              </div>

              <div className="flex w-[900px] max-sm:hidden ">
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
              <div className="flex gap-[1.625rem] items-center max-sm:gap-[.5rem]">
                {/*
                 */}
                <div className="w-[48px] h-[48px] max-sm:w-[30px] max-sm:h-[30px]   rounded-full bg-none flex itemss-center justify-center hover:bg-gray-200 transition">
                  <Link to="/cart" className="flex items-center justify-center">
                    <img src={cart_icon} alt="" className="h-[30px] w-[30px] max-sm:w-[30px] max-sm:h-[30px] " />
                  </Link>
                </div>
                <div className="w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]">
                  <img src={user} alt="user icon" className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="hidden w-[900px] max-sm:flex max-sm:w-full ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
