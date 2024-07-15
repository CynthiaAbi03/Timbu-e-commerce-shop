import React, { useContext } from 'react';
import search_icon from '../assets/icons/search_icon.svg';
import { Link } from 'react-router-dom';
import cart_icon from '../assets/icons/cart-icon.svg';
import heart_icon from '../assets/icons/heart_icon.svg';
import user from '../assets/icons/user.png';
import toggle_icon from '../assets/icons/toggle.svg';
import Checkbox from '@mui/material/Checkbox';
import DynamicCSSVariables from '../components/CustomSlider';
import cross_icon from '../assets/icons/cross.svg';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from '@mui/material';

import { useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContextss';

const Header = (props) => {
  const { mainCategory } = props;
  const filterCategoryWomen = [
    'Shoes',
    'Jackets',
    'Jewelery',
    'Sweaters',
    'HandBag',
    'Blouse',
  ];
  const filterCategoryMen = ['Jackets'];
  const filterCategoryKids = ['Sweaters'];
  const [filterCategory, setFilterCategory] = useState(filterCategoryWomen);
  useEffect(() => {
    if (mainCategory) {
      switch (mainCategory.toLowerCase()) {
        case 'men':
          setFilterCategory(filterCategoryMen);
          break;
        case 'women':
          setFilterCategory(filterCategoryWomen);
          break;
        case 'kids':
          setFilterCategory(filterCategoryKids);
          break;
        default:
          setFilterCategory([]);
      }
    }
  }, [mainCategory]);
  const filterSizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  const { getTotalCartItems, showAlert, setShowAlert } = useContext(ShopContext);
  const [isVisible, setIsVisible] = useState(false);
  const closeSidebar = () => {
    setIsVisible(false);
  };
  const openSidebar = () => {
    setIsVisible(true);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  }


  return (
    <>
    {showAlert && (
          <div className="absolute w-full justify-center top-[0px] z-50 p-[0px] m-[0px] flex">
            <Stack className="flex  w-[50%] shadow-lg max-md:w-[80%] max-sm:w-[90%] max-xsm:w-[90%] " spacing={3}>
            <Alert
                severity="success"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleCloseAlert}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
               
                sx={{
                  fontSize: '18px',
                  
                  
                }}
              >
                <AlertTitle
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                  
                >
                  Success
                </AlertTitle>
                Item added to cart
              </Alert>
            </Stack>
          </div>
        )}
      <div className="relative pr-custom-mr pl-custom-ml py-[20px] max-md:px-[32px] max-sm:pr-[24px] max-sm:pl-[24px] max-md:fixed max-md:top-[0px] max-md:right-[0] max-md:left-[0] max-md:bg-white max-md:z-10 max-md:shadow-md max-sm:fixed max-sm:top-[0px] max-sm:right-[0] max-sm:left-[0] max-sm:bg-white max-sm:z-10 max-sm:shadow-md ">
      {/* show alert when item added to cart */}
      
        {/* sidebar smaller view*/}
        <div
          className={`absolute px-[30px] overflow-auto shadow-sm flex w-[70%] flex-col gap-[1rem] h-screen max-md:h-screen py-[30px] top-[0px] transition-all duration-300 bg-white border border-solid  ${
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
                <div className="flex items-center gap-[.5rem] max-md:text-[1rem]">
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
                  <div
                    key={index}
                    className="flex items-center gap-[.5rem] max-md:text-[1rem]"
                  >
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
              <p className="font-medium text-[.875rem] text-primaryblack max-md:text-[1rem]">
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
            <div className="flex flex-col gap-[.5rem] max-md:text-[1rem]">
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
          <div className="flex flex-col w-full max-sm:gap-[.5rem] max-md:gap-[.5rem]">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-[.5rem] p-[0px]">
                <div
                  onClick={openSidebar}
                  className="hidden h-[25px]  w-[25px] max-sm:flex max-sm:items-center max-sm:justify-center max-md:flex max-md:items-center max-md:justify-center"
                >
                  <img
                    src={toggle_icon}
                    className="w-full h-full"
                    alt="toggle_icon"
                  />
                </div>
                <p className="font-Messiri flex self-start p-[0px] text-[2rem]  text-primaryblack font-bold max-sm:text-[1.8rem]">
                  TIMBU
                </p>
              </div>

              {/* search bar  large view*/}

              <div className="flex w-[900px] shadow-sm  border border-gray-200 border-solid rounded-lg  max-sm:hidden max-md:hidden">
                <input
                  className=" w-full px-[.5rem] my-[4pxrem] mx-[.5rem]  py-[.5rem] outline-none"
                  type="text"
                  placeholder="Search Here"
                />
                <div className="flex cursor-pointer items-center px-[.6rem] rounded-r-lg bg-browntheme hover:bg-hoverbrown transition">
                  <img
                    style={{ fill: 'white' }}
                    src={search_icon}
                    alt="search icon"
                  />
                </div>
              </div>
              <div className="flex gap-[1.625rem] items-center max-sm:gap-[.5rem] max-md:gap-[1rem]">
                {/*
                 */}

                {/* top right nav view  */}
                <div className="relative w-[48px] h-[48px] max-sm:w-[30px] max-sm:h-[30px] max-md:w-[35px] max-md:h-[35px]  rounded-full bg-none flex itemss-center justify-center hover:bg-gray-200 transition">
                  <Link to="/cart" className="flex items-center justify-center">
                    <img
                      src={cart_icon}
                      alt=""
                      className="h-[30px] w-[30px] max-sm:w-[30px] max-sm:h-[30px] max-md:w-full max-md:h-full "
                    />
                  </Link>
                  {getTotalCartItems() > 0 && (
                    <div className="absolute top-[-12px] font-bold right-[-10px] flex items-center justify-center bg-red-600 text-white rounded-full max-sm:h-[20px] max-sm:w-[20px] max-sm:text-[.825rem] h-[30px] w-[30px]">
                      {getTotalCartItems()}
                    </div>
                  )}
                </div>
                <div className="w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]">
                  <img src={user} alt="user icon" className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* smaller screen search bar */}
            <div className="hidden w-[full] border border-gray-200 border-solid rounded-lg max-sm:flex max-sm:w-full max-md:w-full max-md:flex ">
              <input
                className=" w-full  my-[4pxrem] mx-[.5rem] px-[.5rem] py-[.5rem] outline-none"
                type="text"
                placeholder="Search Here"
              />
              <div className="flex cursor-pointer items-center px-[.6rem] rounded-r-lg bg-browntheme hover:bg-hoverbrown transition">
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
