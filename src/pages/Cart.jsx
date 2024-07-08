import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import product_1 from '../assets/images/product_1.png';
import bin_icon from '../assets/icons/bin_icon.svg';
import arrow_back from '../assets/icons/arrow_back.svg';
const Cart = () => {
  const cartProduct = [
    {
      image: product_1,
      name: 'Ladies Off Shoulder Slit Hem Cable Party Dress with Belt',
    },
    {
      image: product_1,
      name: 'Ladies Off Shoulder Slit Hem Cable Party Dress with Belt',
    },
    {
      image: product_1,
      name: 'Ladies Off Shoulder Slit Hem Cable Party Dress with Belt',
    },
    {
      image: product_1,
      name: 'Ladies Off Shoulder Slit Hem Cable Party Dress with Belt',
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full max-w-[2200px] mx-auto pr-custom-mr pl-custom-ml flex flex-col gap-[2rem]">
        <div className="flex items-center gap-[.25rem]">
          <Link to="/">
            <img src={arrow_back} alt="back arrow" />
          </Link>
          <p className="text-[1.5rem]">Shopping Cart</p>
        </div>
        <div className="flex justify-between gap-[2rem] w-full">
          <div className="flex flex-col  w-[75%] gap-[2rem]">
            {cartProduct.map((item, index) => (
              <div className="flex flex-col border items-start w-full self-start rounded-md border-greyborder">
                <div
                  key={index}
                  className="py-[.8rem] w-full px-[1.25rem] flex gap-[1rem]"
                >
                  <div className="h-[150px]">
                    <img
                      className="h-full w-full rounded-[4px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col w-full justify-between ">
                    <div className="flex items-center justify-between">
                      <p className="text-[1.25rem] text-primaryblack">
                        {item.name}
                      </p>
                      <div className="flex items-center">
                        <button className="bg-greyfill px-[1rem] py-[.5rem] border border-greyborder text-[1.25rem] text-greytext">
                          -
                        </button>
                        <p className="px-[1rem] py-[.5rem] font-light border-b border-t border-greyborder text-greytext text-[1.25rem]">
                          2
                        </p>
                        <button className="px-[1rem] py-[.5rem] bg-greyfill border  border-greyborder text-greytext text-[1.25rem]">
                          +
                        </button>
                      </div>
                      <p className="text-primaryblack text-[1.25rem] font-bold">
                        $500
                      </p>
                    </div>
                    <div className="flex items-center  justify-between">
                      <div className="flex flex-col gap-[4px] font-light text-[.875rem] text-primaryblack ">
                        <p>Size: Small</p>
                        <p>Colour: Pink</p>
                      </div>
                      <div className="flex items-center gap-[.825rem]">
                        <button>
                          <img src={bin_icon} alt="bin icon" />
                        </button>
                        <p className="text-primaryblack">Remove</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" border w-[25%] self-start border-greyborder rounded-md  pt-[1rem] pb-[9rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <p className="px-[1.5rem] font-medium text-primaryblack text-[1.5rem]">
                Order Summary
              </p>
              <div className="flex flex-col gap-[1rem] ">
                <div className="px-[1.5rem] flex justify-between items-center text-[1.25rem] text-primaryblack">
                  <p>Items Subtotal</p>
                  <p>$500</p>
                </div>
                <div className=" px-[1.5rem] flex justify-between items-center text-[1.25rem] text-primaryblack">
                  <p>Tax</p>
                  <p>$500</p>
                </div>
                <div className="border-t border-t-greyborder"></div>
                <div className="px-[1.5rem] flex justify-between items-center font-bold text-primaryblack text-[2rem]">
                  <p>Total</p>
                  <p>$500</p>
                </div>
                <div className="px-[1.5rem] w-full">
                  <button className="bg-browntheme w-full py-[.25rem] rounded-md text-white font-medium text-[1.25rem] ">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
