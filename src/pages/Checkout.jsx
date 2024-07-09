import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Checkbox from '@mui/material/Checkbox';
import arrow_back from '../assets/icons/arrow_back.svg';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import paypal from '../assets/icons/paypal.svg';
import payoneer from '../assets/icons/payoneer.svg';
import help from '../assets/icons/help_outline.svg';
import calender from '../assets/icons/calendar.svg';

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full mt-[2rem] max-sm:mt-[10rem] max-md:mt-[10rem] max-w-[2200px] mx-auto pr-custom-mr pl-custom-ml max-sm:px-[24px] max-md:px-[32px] flex flex-col gap-[2rem]">
        <div className="flex items-center gap-[.5rem]">
          <Link className="w-[48px] h-[48px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-none flex items-center justify-center hover:bg-gray-200 transition" to="/cart">
            <img className='h-[38px] w-[38px] max-sm:w-[34px] max-sm:h-[34px]' src={arrow_back} alt="back arrow" />
          </Link>
          <p className="text-[1.5rem] max-sm:text-[1.25rem]">Back</p>
        </div>

        {/* body-cart */}
        <div className="flex justify-between w-full gap-[3rem] max-sm:flex-col max-sm:gap-[1rem] max-md:flex-col max-md:gap-[1rem]">
          {/* payments details and billing information */}
          <div className=" w-[73%] flex flex-col self-start gap-[2rem] max-sm:w-full max-md:w-full">
            {/* billing information */}
            <div className="flex w-full flex-col gap-[1.5rem]">
              <p className="text-primaryblack text-[1.5rem]">
                Billing Information
              </p>
              <div className="flex items-center gap-[1rem] max-sm:flex-col max-sm:gap-[1rem]">
                <div className="flex flex-col w-full gap-[.5rem]">
                  <label htmlFor="">First Name*</label>
                  <input
                    type="text"
                    className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                    placeholder="Cynthia"
                  />
                </div>
                <div className="flex flex-col w-full gap-[.5rem]">
                  <label htmlFor="">Last Name*</label>
                  <input
                    type="text"
                    className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                    placeholder="Abissegue"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full gap-[.5rem]">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                  placeholder="No, 1, Rakiat street off ogundipe Lagos"
                />
              </div>
              <div className="flex items-center gap-[1rem] max-sm:flex-col max-sm:gap-[1rem]">
                <div className="flex flex-col w-full gap-[.5rem]">
                  <label htmlFor="">City*</label>
                  <input
                    type="text"
                    className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                    placeholder="Yaoundé"
                  />
                </div>
                <div className="flex flex-col w-full gap-[.5rem]">
                  <label htmlFor="">State*</label>
                  <input
                    type="text"
                    className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                    placeholder="Yaoundé"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[1rem] max-sm:flex-col max-sm:gap-[1rem]">
                <div className="flex flex-col w-full gap-[.5rem]">
                  <label htmlFor="">Country*</label>
                  <input
                    type="text"
                    className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                    placeholder="Cameroon"
                  />
                </div>
                <div className="flex flex-col w-full gap-[.5rem]">
                  <label htmlFor="">Postal Code*</label>
                  <input
                    type="text"
                    className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[1rem] max-sm:flex-col max-sm:gap-[1rem]">
                <div className="flex flex-col w-full gap-[.5rem]">
                  <label htmlFor="">Email*</label>
                  <input
                    type="text"
                    className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                    placeholder="abisseguecynthia@gmail.com"
                  />
                </div>
                <div className="flex flex-col w-full gap-[.5rem]">
                  <label htmlFor="">Phone Number*</label>
                  <input
                    type="number"
                    className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                    placeholder="+237 689-98-00-77"
                  />
                </div>
              </div>
            </div>

            {/* Select Shipping Method */}
            <div className="flex w-full flex-col gap-[1.5rem]">
              <p className="text-primaryblack text-[1.5rem]">
                Select Shipping Method
              </p>
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-[.2rem]">
                  <Radio
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{
                      color: '#b05405', // Color when not checked
                      '&.Mui-checked': {
                        color: '#b05405', // Color when checked
                      },
                    }}
                    defaultChecked
                  />
                  <div className="flex flex-col gap-[0px]">
                    <p className="font-light text-primaryblack">
                      Free Shipping
                    </p>
                    <p className="font-light text-greytext">
                      Estimated date of delivery 12th May
                    </p>
                  </div>
                </div>
                <p className="font-light text-primaryblack">$0.00</p>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-[.2rem]">
                  <Radio
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{
                      color: '',
                      '&.Mui-checked': {
                        color: '#b05405',
                      },
                    }}
                  />
                  <div className="flex flex-col gap-[0px]">
                    <p className="font-light text-primaryblack">
                      Ground Shipping
                    </p>
                    <p className="font-light text-greytext">
                      Estimated date of delivery 12th May
                    </p>
                  </div>
                </div>
                <p className="font-light text-primaryblack">$0.00</p>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-[.2rem]">
                  <Radio
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{
                      color: '',
                      '&.Mui-checked': {
                        color: '#b05405',
                      },
                    }}
                  />
                  <div className="flex flex-col gap-[0px]">
                    <p className="font-light text-primaryblack">
                      Express Shipping
                    </p>
                    <p className="font-light text-greytext">
                      Estimated date of delivery 12th May
                    </p>
                  </div>
                </div>
                <p className="font-light text-primaryblack">$0.00</p>
              </div>
            </div>

            {/* Payment Method */}

            <div className="flex w-full flex-col gap-[1.5rem]">
              <p className="text-primaryblack text-[1.5rem]">Payment Method</p>
              <div className="w-full border border-greyborder rounded-md px-[1.5rem] py-[0.7rem]">
                <div className="flex flex-col gap-[1.5rem]">
                  <div className="flex items-center">
                    <Radio
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                      sx={{
                        color: '#b05405', // Color when not checked
                        '&.Mui-checked': {
                          color: '#b05405', // Color when checked
                        },
                      }}
                      defaultChecked
                    />
                    <p className="font-medium text-primaryblack text-[1.25rem] ">
                      {' '}
                      Credit Card
                    </p>
                  </div>
                  <div className="flex items-center gap-[1rem] max-sm:flex-col max-sm:gap-[1rem]">
                    <div className="flex flex-col w-full gap-[.5rem]">
                      <label htmlFor="">Name on Card*</label>
                      <input
                        type="text"
                        className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                        placeholder="Cynthia"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-[.5rem]">
                      <label htmlFor="">Card Number*</label>
                      <input
                        type="number"
                        className="border rounded-md border-greyborder w-full px-[.5rem] py-[.5rem] placeholder:text-[.875rem]"
                        placeholder="5555-5555-4444-4456"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-[1rem] max-sm:flex-col max-sm:gap-[1rem]">
                    <div className="flex flex-col w-full gap-[.5rem]">
                      <label htmlFor="">Expiry Date</label>
                      <div className="flex space-between gap-[1rem] rounded-md border border-greyborder w-full px-[.5rem] py-[.5rem] ">
                        <input
                          type="number"
                          className="w-full placeholder:text-[.875rem] outline-none"
                          placeholder="06/23"
                        />
                        <img src={calender} alt="" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-[.5rem]">
                      <label htmlFor="">CVV</label>
                      <div className="flex space-between gap-[1rem] rounded-md border border-greyborder w-full px-[.5rem] py-[.5rem] ">
                        <input
                          type="number"
                          className="w-full placeholder:text-[.875rem] outline-none"
                          placeholder="444"
                        />
                        <img src={help} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border border-greyborder rounded-md px-[1.5rem] py-[0.7rem]">
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center">
                    <Radio
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                      sx={{
                        color: '', // Color when not checked
                        '&.Mui-checked': {
                          color: '#b05405', // Color when checked
                        },
                      }}
                    />
                    <p className="font-medium text-primaryblack text-[1.25rem] max-sm:text-[1rem] max-sm:font-bold">
                      {' '}
                      PayPal
                    </p>
                  </div>
                  <div>
                    <img src={paypal} alt="paypal icon" />
                  </div>
                </div>
              </div>
              <div className="w-full border border-greyborder rounded-md px-[1.5rem] py-[0.7rem]">
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center">
                    <Radio
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                      sx={{
                        color: '', // Color when not checked
                        '&.Mui-checked': {
                          color: '#b05405', // Color when checked
                        },
                      }}
                    />
                    <p className="font-medium text-primaryblack text-[1.25rem] max-sm:text-[1rem] max-sm:font-bold">
                      {' '}
                      Payoneer
                    </p>
                  </div>
                  <div>
                    <img src={payoneer} alt="payoneer icon" />
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-[.5rem]'>
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
                <p className='font-light text-primaryblack text-[1.25rem]'>Save card details</p>

              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className=" border w-[27%] max-md:w-full sticky top-[20px] self-start border-greyborder rounded-md  pt-[1rem] pb-[3rem] max-sm:static max-sm:w-full max-sm:pb-[4rem] max-md:pb-[4rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <p className="px-[1.5rem] font-medium text-primaryblack text-[1.5rem] max-sm:px-[3rem] max-sm:text-[1.5rem]">
                Order Summary
              </p>
              <div className="flex flex-col gap-[1rem] ">
                <div className="px-[1.5rem] flex justify-between items-center text-[1.25rem] text-primaryblack max-sm:px-[3rem] max-sm:text-[1.25rem]">
                  <p>Items Subtotal</p>
                  <p>$500</p>
                </div>
                <div className=" px-[1.5rem] flex justify-between items-center text-[1.25rem] text-primaryblack max-sm:px-[3rem] max-sm:text-[1.25rem]">
                  <p>Tax</p>
                  <p>$500</p>
                </div>
                <div className="border-t border-t-greyborder"></div>
                <div className="px-[1.5rem] flex justify-between items-center font-bold text-primaryblack text-[2rem] max-sm:px-[3rem] max-sm:text-[1.5rem]">
                  <p>Total</p>
                  <p>$500</p>
                </div>
                <Link
                  to="/"
                  className="bg-browntheme text-center  mx-[1.5rem] mt-[1rem] max-sm:mx-[3rem] max-sm:py-[.5rem] py-[.25rem] w-[full] rounded-md text-white font-medium text-[1.25rem] hover:bg-hoverbrown hover:transition "
                >
                  Place Order
                </Link>
                <div className="flex items-center mx-[1.5rem] max-sm:mx-[3rem] gap-[.5rem]">
                  <input
                    type="checkbox"
                    name=""
                    htmlFor="terms and privacy"
                    id=""
                  />
                  <p className="text-primaryblack text-[.9rem] font-light">
                    I agree to the{' '}
                    <span className="text-browntheme font-medium">
                      Terms of Service
                    </span>{' '}
                    and{' '}
                    <span className="text-browntheme font-medium">
                      Privacy Policy
                    </span>
                  </p>
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

export default Checkout;
