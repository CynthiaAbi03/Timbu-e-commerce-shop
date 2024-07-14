import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { ShopContext } from '../../context/ShopContextss';
import heart_icon from '../../assets/icons/heart_icon.svg';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import left_chev from '../../assets/icons/left_chev.svg';
import right_chev from '../../assets/icons/right_chev.svg';


const Item = (props) => {
  const { addToCart, showAlert, setShowAlert } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(props.id);
    setShowAlert(true);
    console.log('added to cart', props.id);
  };

  return (


    <div
      key={props.index}
      className="flex flex-col border border-greyborder rounded-md max-sm:w-[80%] max-sm:mx-auto cursor-pointer shadow-none hover:shadow-lg transition"
    >
      <div className="relative">
        <div className="w-full h-[350px] max-sm:h-[300px] max-md:h-[325px]">
          <Link to={`/product/${props.id}`}>
            {' '}
            <img
              onClick={window.scrollTo(0, 0)}
              className="w-full h-full hover:scale-[1.01] transition rounded-t-md object-cover object-center cursor-pointer"
              src={props.images}
              alt=""
            />
          </Link>
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
        <div className="flex flex-col gap-[.6rem] ">
          <p className="text-greytext max-sm:text-[14px] uppercase ">{props.category}</p>
          <p className="text-primaryblack text-[1.125rem] max-sm:textt-[1rem]">
            {props.name}
          </p>
          <p className="font-bold text-primaryblack text-[1.125rem] max-sm:text-[1rem]">
            ${props.price}
          </p>
        </div>
        <div className="flex justify-center w-full mt-[1rem]">
          <Link
            //  onClick={(event) => scrollToTopAndNavigate(event, history)}
            className="bg-browntheme py-[.5rem] text-center text-white w-full font-medium rounded-md hover:bg-hoverbrown hover:transition"
            onClick={(e) => {
              handleAddToCart(e);
            }}
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  
    

  );
};

export default Item;
