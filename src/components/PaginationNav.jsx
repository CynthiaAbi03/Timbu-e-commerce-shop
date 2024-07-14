import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContextss';
import left_chev from '../assets/icons/left_chev.svg';
import right_chev from '../assets/icons/right_chev.svg';

const PaginationNav = () => {
  const { page, setPage, isLoading, errorLoading } = useContext(ShopContext);
  const navigate = useNavigate();
  const [buttonNotActive, setButtonNotActive] = useState(false);

  const navigationForward = () => {
    if (page < 4) {
      setPage((prev) => prev + 1);
      navigate(`/allproducts/display/${page + 1}`);
    }
  };

  const navigationBackward = () => {
    if (page < 1) {
      navigate(`/allproducts/display/${page - 1}`);
      setPage((prev) => prev - 1);
    }
  };

  return isLoading ? (
    <div>Still Loadind</div>
  ) : errorLoading ? (
    <div>Error Loading</div>
  ) : (
    <>
      <button
        onClick={navigationBackward}
        disabled={page === 1}
        // className="w-[50px] cursor-pointer hover:bg-gray-100 transition h-[50px] border  rounded-md border-greyborder flex items-center justify-center max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]"
        className={`w-[50px] h-[50px] border rounded-md flex items-center justify-center max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px] ${
          page === 1
            ? 'cursor-not-allowed bg-gray-200'
            : 'cursor-pointer hover:bg-gray-100 transition'
        }`}
      >
        <img src={left_chev} alt="left chevron" />
      </button>
      <NavLink
        onClick={() => setPage(1)}
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'flex justify-center cursor-pointer px-[1.1rem] py-[.6rem] items-center rounded-md border  text-[1.125rem] bg-browntheme text-white font-bold border-greyborder max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]'
            : 'flex justify-center cursor-pointer hover:bg-gray-100 transition px-[1.1rem] py-[.6rem] items-center rounded-md border  text-greytext text-[1.125rem] font-medium border-greyborder max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]'
        }
      >
        1
      </NavLink>
      <NavLink
        to="/allproducts/display/2"
        onClick={() => setPage(2)}
        className={({ isActive }) =>
          isActive
            ? 'flex justify-center px-[1.1rem] cursor-pointer py-[.6rem] items-center rounded-md border   text-[1.125rem] bg-browntheme text-white font-bold border-greyborder max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]'
            : 'flex justify-center px-[1.1rem] cursor-pointer hover:bg-gray-100  py-[.6rem] items-center rounded-md border  text-greytext text-[1.125rem] font-medium border-greyborder max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]'
        }
      >
        2
      </NavLink>
      <NavLink
        to="/allproducts/display/3"
        onClick={() => setPage(3)}
        className={({ isActive }) =>
          isActive
            ? 'flex justify-center px-[1.1rem] cursor-pointer py-[.6rem] items-center rounded-md border  text-[1.125rem] bg-browntheme text-white font-bold border-greyborder max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]'
            : 'flex justify-center px-[1.1rem] cursor-pointer hover:bg-gray-100  py-[.6rem] items-center rounded-md border  text-greytext text-[1.125rem] font-medium border-greyborder max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]'
        }
      >
        3
      </NavLink>
      <NavLink
        onClick={() => setPage(4)}
        to="/allproducts/display/4"
        className={({ isActive }) =>
          isActive
            ? 'flex justify-center cursor-pointer px-[1.1rem] py-[.6rem] items-center rounded-md border text-[1.125rem] bg-browntheme text-white font-bold border-greyborder max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]'
            : 'flex justify-center cursor-pointer hover:bg-gray-100  px-[1.1rem] py-[.6rem] items-center rounded-md border  text-greytext text-[1.125rem] font-medium border-greyborder max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px]'
        }
      >
        4
      </NavLink>

      <button
        onClick={navigationForward}
        disabled={page === 4}
        //
        className={`w-[50px] h-[50px] border rounded-md flex items-center justify-center max-sm:h-[40px] max-sm:w-[40px] max-sm:text-[14px] ${
          page === 4
            ? 'cursor-not-allowed bg-gray-200'
            : 'cursor-pointer hover:bg-gray-100 transition'
        }`}
      >
        <img src={right_chev} alt="left chevron" />
      </button>
    </>
  );
};

export default PaginationNav;
