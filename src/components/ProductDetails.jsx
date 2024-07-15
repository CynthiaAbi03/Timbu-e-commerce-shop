import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContextss';
import image1 from '../assets/images/product_1.png';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: '#B05405', // Customize the filled star color
  },
}));
const ProductDetails = (props) => {
  const { allShopProducts, addToCart, removeFromCart, cartItems, setShowAlert } =
    useContext(ShopContext);
  const [value, setValue] = useState(3);
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(props.id);
    setShowAlert(true);
    window.scrollTo(0,0);
    console.log('added to cart', props.id);
  };
  return (
    <div className="flex h-full gap-[2rem] max-md:h-full max-md:mt-[9rem] max-md:gap-[2rem] max-sm:gap-[2rem] max-sm:pl-[24px] max-sm:pr-[24px] max-sm:flex-col max-md:flex-col max-sm:mt-[8rem] max-sm:h-full max-sm:w-full max-sm:mx-auto">
      <div className=" h-full w-[40%] max-sm:w-full rounded-lg max">
        <img
          className=" w-full h-full rounded-lg object-contain"
          src={props.image1}
          alt=""
        />
      </div>

      <div className="flex flex-1 justify-between max-sm:gap-[1.6rem] max-md: gap-[2rem] flex-col">
        <div className="flex flex-col gap-[.875rem]">
          <div className="flex p-[0px] m-[0px] gap-[.5rem] flex-col">
            <p className="text-gray-400 uppercase text-[1.25rem] max-sm:text-[1rem]">
              {props.category}
            </p>
            <p className="font-light text-[1.5rem] text-primaryblack max-sm:text-[1.25rem]">
              {props.name}
            </p>
            <p className="font-bold text-[1.5rem]">${props.price}</p>
          </div>

          <div className="flex flex-col p-[0px] m-[0px] gap-[8px]">
            <p className="text-gray-600 leading-6">{props.description}</p>
            <StyledRating
              name="simple-controlled"
              className="m-[0px] p-[0px]"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col  p-[0px] m-[0px] gap-[.65rem]">
          <p className="font-light text-[1.2rem]">Quantity</p>
          <div className="flex items-center  text-[1.25rem] max-sm:text-[1rem] max-xsm:text-[1rem]">
            <button
              onClick={() => removeFromCart(props.id)}
              className="bg-greyfill px-[.8em] py-[.3em] max-sm:px-[.5em] max-sm:py-[.2em] border border-greyborder text-greytext"
            >
              -
            </button>
            <p className="px-[.8em] py-[.3em] font-light border-b max-sm:px-[.5em] max-sm:py-[.2em] border-t border-greyborder text-greytext ">
            {cartItems[props.id]}
            </p>
            <button
              onClick={() => addToCart(props.id)}
              className="px-[.8em] py-[.3em] max-sm:px-[.5em] max-sm:py-[.2em] bg-greyfill border  border-greyborder text-greytext "
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col  p-[0px] m-[0px] gap-[.65rem]">
          <p className="font-light text-[1.2rem]">Colours</p>
          <div className="flex gap-[8px]">
            <div className="rounded-md h-[40px] w-[40px] bg-greentheme  " />
            <div className="rounded-md h-[40px] w-[40px] bg-pinktheme  " />
            <div className="rounded-md h-[40px] w-[40px] bg-bluetheme  " />
            <div className="rounded-md h-[40px] w-[40px] bg-browntheme  " />
          </div>
        </div>

        <div className="flex flex-col p-[0px] m-[0px] gap-[.65rem]">
          <p className="font-light text-[1.2rem]">Select Size</p>
          <div className="flex gap-[8px] text-greytext">
            <div className="flex justify-center items-center border border-greyborder rounded-md h-[40px] w-[40px]">
              S
            </div>
            <div className="flex justify-center text-white bg-browntheme items-center border border-greyborder rounded-md h-[40px] w-[40px]">
              M
            </div>
            <div className="flex justify-center items-center border border-greyborder rounded-md h-[40px] w-[40px]">
              L
            </div>
            <div className="flex justify-center items-center border border-greyborder rounded-md h-[40px] w-[40px]">
              XL
            </div>
          </div>
        </div>

        <div className="p-[0px] m-[0px]">
          <button
            onClick={(e) => {
              handleAddToCart(e);
            }}
            className="text-white bg-browntheme font-medium py-[.5rem] max-sm:py-[.5rem] max-md:w-full max-sm:w-full w-1/2 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
