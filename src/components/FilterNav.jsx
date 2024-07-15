import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContextss';
import chevron_down from '../assets/icons/chevron-down.svg';

const FilterNav = () => {
  const { showAlert, setShowAlert,page} = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between max-sm:w-full max-sm:flex-col  max-md:flex-col max-sm:items-start max-md:items-start max-sm:gap-[1.5rem] max-md:gap-[1.5rem] ">
      <div className="flex items-center gap-[1.625rem]">
        <p>Sort by:</p>
        <button className="flex items-center py-[0.625em] px-[0.625em] gap-[6px] border border-solid border-greyborder rounded-md ">
          <p className="font-light text-primaryblack">Low to high</p>
          <div>
            <img src={chevron_down} alt="chevron down icon" />
          </div>
        </button>
      </div>
      <div className="flex items-center e text-[1.25rem] gap-[2rem] max-md:justify-between max-md:w-full max-sm:justify-between max-sm:w-full max-sm:text-[1rem] max-xsm:flex-wrap max-xsm:text-[.875rem] max-xsm:gap-[6px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'font-medium text-browntheme' : 'font-light'
          }
        >
          All Products
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-browntheme'
              : 'font-light hover:font-medium transition'
          }
          to="/allproducts/men"
          onClick={() => setShowAlert(false)}
        >
          Men
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-browntheme'
              : 'font-light hover:font-medium transition'
          }
          to="/allproducts/women"
          onClick={() => setShowAlert(false)}
        >
          Women
        </NavLink>
        {/* <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-browntheme'
              : 'font-light hover:font-medium transition'
          }
          to="/allproducts/women"
          onClick={() => setShowAlert(false)}
        >
          Jewelery
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-browntheme'
              : 'font-light hover:font-medium transition'
          }
          to="/allproducts/kids"
          onClick={() => setShowAlert(false)}
        >
          Kids
        </NavLink>
      </div>
      <div className="flex text-primaryblack">
        {page === 4 ? (
          <p className="font-medium text-[1rem]">
            Showing <span className="font-light"> 1 of 31 results</span>
          </p>
        ) : (
          <p className="font-medium text-[1rem]">
            Showing <span className="font-light"> 1-10 of 31 results</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterNav;
