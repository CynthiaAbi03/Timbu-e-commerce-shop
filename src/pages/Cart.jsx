import React from 'react';
import Header from '../components/Header';
import { useEffect } from 'react';
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
            to="/"
          >
            <img
              className="h-[38px] w-[38px] max-sm:w-[34px] max-sm:h-[34px]"
              src={arrow_back}
              alt="back arrow"
            />
          </Link>
          <p className="text-[1.5rem] max-sm:text-[1.5rem]">Back</p>
        </div>
        <div className="flex justify-between gap-[2rem] w-full max-sm:flex-col max-md:flex-col">
          {/* cart view */}
          <div className="flex flex-col  w-[75%] gap-[2rem] max-sm:w-full max-md:w-full">
            {cartProduct.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border items-start w-full self-start rounded-md border-greyborder"
              >
                <div
                  key={index}
                  className="py-[.8rem] w-full px-[1.25rem] flex gap-[1rem] "
                >
                  <div className="h-[140px] max-sm:h-full max-xsm:h-full max-md:h-full max-sm:bg-browntheme ">
                    <img
                      className="h-full w-full rounded-[4px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col w-full justify-between  ">
                    <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-[1rem] max-sm:flex-col max-sm:items-start max-sm:gap-[1rem]">
                      <p className="text-[1.25rem] text-primaryblack max-sm:text-[1rem] max-xsm:text-[1rem]">
                        {item.name}
                      </p>
                      <div className="flex items-center text-[1.25rem] max-sm:text-[1.25rem] max-xsm:text-[1rem]">
                        <button className="bg-greyfill px-[1rem] py-[.5rem] border border-greyborder text-greytext">
                          -
                        </button>
                        <p className="px-[1rem] py-[.5rem] font-light border-b border-t border-greyborder text-greytext ">
                          2
                        </p>
                        <button className="px-[1rem] py-[.5rem] bg-greyfill border  border-greyborder text-greytext ">
                          +
                        </button>
                      </div>
                      <p className="text-primaryblack text-[1.25rem] font-bold max-sm:text-[1.25rem]">
                        $500
                      </p>
                    </div>
                    <div className="flex items-center  justify-betwee max-md:flex-col max-md:items-start gap-[8px] max-sm:flex-col">
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

          {/* order summary */}
          <div className=" border w-[25%] max-md:w-full sticky top-[20px] self-start border-greyborder rounded-md  pt-[1rem] pb-[9rem] max-sm:static max-sm:w-full max-sm:pb-[4rem] max-md:pb-[4rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <p className="px-[1.5rem]  font-medium text-primaryblack text-[1.5rem] max-sm:px-[3rem] max-sm:text-[1.25rem]">
                Order Summary
              </p>
              <div className="flex flex-col gap-[1rem] ">
                <div className="px-[1.5rem] max-sm:px-[3rem] flex justify-between items-center text-[1.25rem] max-sm:text-[1.25rem] text-primaryblack">
                  <p>Items Subtotal</p>
                  <p>$500</p>
                </div>
                <div className=" px-[1.5rem]  max-sm:px-[3rem] flex justify-between items-center text-[1.25rem] max-sm:text-[1.25rem] text-primaryblack">
                  <p>Tax</p>
                  <p>$500</p>
                </div>
                <div className="border-t border-t-greyborder"></div>
                <div className="px-[1.5rem]  max-sm:px-[3rem]  flex justify-between items-center font-bold text-primaryblack text-[2rem]">
                  <p>Total</p>
                  <p>$500</p>
                </div>
                <Link
                  to="/checkout"
                  className="bg-browntheme text-center mt-[1rem] mx-[1.5rem] max-sm:mx-[3rem] py-[.25rem] max-sm:py-[.5rem] w-[full] rounded-md text-white font-medium text-[1.5rem] max-sm:text-[1rem] hover:bg-hoverbrown hover:transition "
                >
                  Check Out
                </Link>
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
