import React from 'react';
import twitter_icon from '../assets/icons/twitter.svg';
import linkedin_icon from '../assets/icons/linkedin.svg';
import facebook_icon from '../assets/icons/facebook.svg';
const Footer = () => {
  return (
    <div className=" py-[34px] mt-[5rem] bg-footerbg">
      <div className="flex flex-col gap-[4rem]">
        <div className="mx-auto max-w-[2200px] w-full">
          <div className="flex justify-between pr-custom-mr pl-custom-ml">
            <div className="flex flex-col gap-[1.125rem]">
              <div className="flex flex-col gap-[.5rem]">
                <div className="text-primaryblack font-Messiri font-bold text-[2rem]">
                  TIMBU
                </div>
                <p className="text-primaryblack font-light text-[1rem]">
                  We bring you the best. Explore our selection and discover
                  <br />
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
            <div className="flex flex-col gap-[1.125rem] ">
              <h2 className="text-primaryblack font-medium text-[1.5rem] ">
                COMPANY
              </h2>
              <p className="text-primaryblack font-light text-[1.25rem]">
                About Us
              </p>
              <p className="text-primaryblack font-light text-[1.25rem]">
                Affiliate
              </p>
              <p className="text-primaryblack font-light text-[1.25rem]">
                Contact Us
              </p>
            </div>
            <div className="flex flex-col gap-[1.125rem]">
              <h2 className="text-primaryblack font-medium text-[1.5rem] ">
                HELP
              </h2>
              <p className="text-primaryblack font-light text-[1.25rem]">
                Find a store
              </p>
              <p className="text-primaryblack font-light text-[1.25rem]">
                Find a store
              </p>
              <p className="text-primaryblack font-light text-[1.25rem]">
                Legal & Privacy
              </p>
            </div>
            <div className="flex flex-col gap-[1.125rem]">
              <h2 className="text-primaryblack font-medium text-[1.5rem] ">
                SHOP
              </h2>
              <p className="text-primaryblack font-light text-[1.25rem]">
                Dresses
              </p>
              <p className="text-primaryblack font-light text-[1.25rem]">
                Shoes
              </p>
              <p className="text-primaryblack font-light text-[1.25rem]">Bag</p>
            </div>
            <div className="flex flex-col gap-[1.125rem] ">
              <h2 className="text-primaryblack font-medium text-[1.5rem] ">
                MY ACCOUNT
              </h2>
              <p className="text-primaryblack font-light text-[1.25rem]">
                My Profile
              </p>
              <p className="text-primaryblack font-light text-[1.25rem]">
                My Order History
              </p>
              <p className="text-primaryblack font-light text-[1.25rem]">
                My Wishlist
              </p>
            </div>
          </div>
        </div>


        <div className='flex flex-col gap-[1.4rem]'>
          <div className=" border border-solid border-t-footerline"/>
          <div className="mx-auto max-w-[2200px] w-full">
            <div className="font-light flex justify-between pr-[6rem] pl-[6rem]">
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
