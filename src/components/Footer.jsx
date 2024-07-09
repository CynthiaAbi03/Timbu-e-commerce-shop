import React from 'react';
import twitter_icon from '../assets/icons/twitter.svg';
import linkedin_icon from '../assets/icons/linkedin.svg';
import facebook_icon from '../assets/icons/facebook.svg';
const Footer = () => {
  return (
    <div className=" py-[34px] mt-[5rem] bg-footerbg">
      <div className="flex flex-col gap-[4rem]">
        <div className="mx-auto max-w-[2200px] w-full">
          <div className="flex gap-[8rem] justify-between pr-custom-mr pl-custom-ml max-sm:pl-[1.5rem] max-sm:pr-[1.5rem] max-sm:flex-col max-sm:gap-[2rem]">
            <div className=" flex flex-col gap-[1.125rem]">
              <div className="flex flex-col gap-[.5rem] ">
                <div className="text-primaryblack font-Messiri font-bold text-[2rem] max-sm:text-[24px]">
                  TIMBU
                </div>
                <p className="text-primaryblack font-light text-[1rem] max-sm:text-[14px] ">
                  We bring you the best. Explore our selection and discover
                  something new today.
                </p>
              </div>
              <div className="flex gap-[.5rem]">
                <img src={twitter_icon} alt="twitter icon" />
                <img src={linkedin_icon} alt="linkedin icon" />
                <img src={facebook_icon} alt="facebook icon" />
              </div>

              <p></p>
            </div>
            <div className='flex flex-1 justify-between max-sm:flex-col max-sm:gap-[2rem]'>
              
              <div className="flex  flex-1 justify-between ">
                <div className="flex flex-1 flex-col gap-[1.125rem] ">
                  <h2 className="text-primaryblack font-medium text-[1.5rem] max-sm:text-[1rem] ">
                    COMPANY
                  </h2>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    About Us
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    Affiliate
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    Contact Us
                  </p>
                </div>
                <div className="flex flex-1  flex-col gap-[1.125rem]">
                  <h2 className="text-primaryblack font-medium text-[1.5rem] max-sm:text-[1rem] ">
                    HELP
                  </h2>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    Find a store
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    Find a store
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    Legal & Privacy
                  </p>
                </div>
              </div>
              <div className="flex flex-1 justify-between">
                <div className="flex flex-1 flex-col gap-[1.125rem] ">
                  <h2 className="text-primaryblack font-medium text-[1.5rem] max-sm:text-[1rem]  ">
                    SHOP
                  </h2>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    Dresses
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    Shoes
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    Bag
                  </p>
                </div>
                <div className="flex  flex-1 flex-col p-[0] m-[0] gap-[1.125rem] ">
                  <p className="text-primaryblack inline  font-medium text-[1.5rem] max-sm:text-[1rem]">
                    MY ACCOUNT
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    My Profile
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    My Order History
                  </p>
                  <p className="text-primaryblack font-light text-[1.25rem] max-sm:text-[14px] ">
                    My Wishlist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1.4rem]">
          <div className=" border border-solid border-t-footerline" />
          <div className="mx-auto max-w-[2200px] w-full">
            <div className="font-light flex justify-between pr-[6rem] pl-[6rem]  max-sm:text-[14px] max-sm:px-[1rem]">
              <p>Copyright © 2024 TIMBU </p>
              <p>
                All rights reserved |{' '}
                <span>
                  <a className="text-browntheme underline" href="#">
                    Terms and conditions
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
