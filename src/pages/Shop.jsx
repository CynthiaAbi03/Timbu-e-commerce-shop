import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import hero_img from '../assets/images/HeroImage.png';
import Box from '@mui/material/Box';
import DynamicCSSVariables from '../components/CustomSlider';
import './styles/shop.css';
import p1_img from '../assets/images/product_1.png';
import heart_icon from '../assets/icons/heart_icon.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import chevron_down from '../assets/icons/chevron-down.svg';
import all_products from '../assets/all_products';

const Shop = () => {
  const filterCategory = ['Shoes', 'Jewelry', 'Bags'];
  const filterSizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  const [value, setValue] = useState(500);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div
        className="bg-hero-pattern bg-cover bg-center h-[279px] mx-auto max-w-[2200px] w-full"
        style={{ backgroundImage: `url(${hero_img})` }}
      ></div>
      <div className="w-full max-w-[2200px] mx-auto pr-custom-mr pl-custom-ml mt-[44px] gap-[3.5rem] flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[1.625rem]">
            <p>Sort by:</p>
            <button className="flex items-center py-[0.625em] px-[0.625em] gap-[6px] border border-solid border-greyborder rounded-md ">
              <p className="font-light text-primaryblack">Low to high</p>
              <div>
                <img src={chevron_down} alt="chevron down icon" />
              </div>
            </button>
          </div>
          <div className="flex items-center e text-[1.25rem] gap-[2rem]">
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? 'font-medium text-browntheme' : 'font-light'
              }
            >
              All Products
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? 'font-medium text-browntheme' : 'font-light'
              }
              to="/allproducts/men"
            >
              Men
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'font-medium text-browntheme' : 'font-light'
              }
              to="/allproducts/women"
            >
              Women
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'font-medium text-browntheme' : 'font-light'
              }
              to="/allproducts/children"
            >
              Children
            </NavLink>
          </div>
          <div className="flex text-primaryblack">
            <p className="font-medium text-[1rem]">
              Showing <span className="font-light"> 1-20 of 1000 results</span>
            </p>
          </div>
        </div>

        <div className="flex gap-[2rem]">
          <div className="border border-solid  bg-white border-greyborder w-[360px] px-[30px] py-[30px] h-[600px] rounded-md">
            <div className="flex flex-col gap-[2rem]">
              <p>Filter By:</p>
              <div className="flex flex-col gap-[.5rem]">
                <p className="font-medium text-[1rem] text-primaryblack">
                  CATEGORY
                </p>
                <div className="flex flex-col gap-[.5rem]">
                  <div className="flex items-center gap-[.5rem]">
                    <input
                      type="checkbox"
                      name="dresses"
                      className="border border-solid rounded-sm h-[14px] w-[14px] border-primaryblack checked:bg-browntheme"
                    />
                    <label
                      htmlFor="dresses"
                      className="font-light  text-primaryblack"
                    >
                      Dresses
                    </label>
                  </div>
                  {filterCategory.map((name, index) => (
                    <div key={index} className="flex items-center gap-[.5rem]">
                      <input
                        type="checkbox"
                        name={name}
                        className="border border-solid rounded-sm h-[14px] w-[14px] border-primaryblack checked:bg-browntheme"
                      />
                      <label
                        htmlFor={name}
                        className="font-light text-primaryblack "
                      >
                        {name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[.5rem]">
                <p className="font-medium text-[1rem] text-primaryblack">
                  SIZES
                </p>
                <div className="flex flex-col gap-[.5rem]">
                  {filterSizes.map((name, index) => (
                    <div key={index} className="flex items-center gap-[.5rem]">
                      <input
                        type="checkbox"
                        name={name}
                        className="border border-solid rounded-sm h-[14px] w-[14px] border-primaryblack checked:bg-browntheme"
                      />
                      <label
                        htmlFor={name}
                        className="font-light text-primaryblack "
                      >
                        {name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[.5rem]">
                <p className="font-medium text-[1rem] text-primaryblack">
                  PRICES
                </p>
                <div className="flex flex-col gap-[0rem]">
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="range"
                      className="font-light text-primaryblack"
                    >
                      Range
                    </label>
                    <p>$120-$1000</p>
                  </div>
                  <DynamicCSSVariables />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[1.825rem]">
            {all_products.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border border-greyborder rounded-md "
              >
                <div className="relative">
                  <div className="w-full h-[450px]">
                    <img
                      className="w-full h-full object-fill object-center"
                      src={item.images}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-[16px] w-[30px] h-[30px] right-[16px]">
                    <img
                      className="w-full h-full cursor-pointer"
                      src={heart_icon}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col h-full justify-between px-[1.25rem]   py-[1.4rem]">
                  <div className='flex flex-col gap-[.6rem] '>
                    <p className="text-greytext">{item.category}</p>
                    <p className="text-primaryblack text-[1.125rem]">
                      {item.name}
                    </p>
                    <p className="font-bold text-primaryblack text-[1.125rem]">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex justify-center w-full mt-[1rem]">
                    <Link to='/cart' className="bg-browntheme py-[.5rem] text-center text-white w-full font-medium rounded-md">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
