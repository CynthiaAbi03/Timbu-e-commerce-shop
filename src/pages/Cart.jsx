import React, { useContext } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import product_1 from '../assets/images/product_1.png';
import bin_icon from '../assets/icons/bin_icon.svg';
import arrow_back from '../assets/icons/arrow_back.svg';
import CartItem from '../components/CartItem';


const Cart = () => {
  const [productQty, setProductQty] = useState(2);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full mt-[2rem] max-sm:mt-[10rem] max-md:mt-[10rem] max-w-[2200px] mx-auto pr-custom-mr pl-custom-ml max-sm:px-[24px]  max-md:px-[32px] flex flex-col gap-[2rem]">
        <div className="flex items-center gap-[.5rem]">
          <Link
            className="w-[48px] h-[48px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-none flex items-center justify-center hover:bg-gray-200 transition"
            to="/allproducts/display/1"
          >
            <img
              className="h-[38px] w-[38px] max-sm:w-[34px] max-sm:h-[34px]"
              src={arrow_back}
              alt="back arrow"
            />
          </Link>
          <p className="text-[1.5rem] max-sm:text-[1.5rem]">Back</p>
        </div>
        <CartItem/>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
