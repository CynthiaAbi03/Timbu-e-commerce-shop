import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContextss';
import { Link, useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

const CartItem = () => {
  const {
    all_product,
    allShopProducts,
    getTotalCartAmount,
    getTotalCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    isLoading,
    errorLoading,
  } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleClickImage = (id) => {
    navigate(`/product/${id}`);
  };
  return isLoading ? (
    <div className="justify-center flex flex-col gap-[1rem] items-center min-h-screen">
      <Audio
        height="70"
        width="70"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <p className="">Loading...</p>
    </div>
  ) : errorLoading ? (
    <div className="justify-center flex flex-col gap-[1rem] items-center min-h-screen">
      Error Fetching data please try again later
    </div>
  ) : getTotalCartItems() > 0 ? (
    <div className="flex justify-between gap-[2rem] w-full max-sm:flex-col max-md:flex-col min-h-screen">
      {/* cart view */}
      <div className=" flex flex-col  w-[75%] gap-[2rem] max-sm:w-full max-md:w-full">
        {allShopProducts.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div
                key={index}
                className="flex flex-co h-[200px] border items-start w-full self-start rounded-md border-greyborder"
              >
                <div
                  key={index}
                  className="py-[.8rem] h-full w-full px-[1.25rem] flex  gap-[1rem] "
                >
                  <div
                    onClick={() => handleClickImage(item.id)}
                    className=" h-full cursor-pointer max-sm:h-full max-xsm:h-full max-md:h-full "
                  >
                    <img
                      className="h-full w-full object-cover rounded-[4px]"
                      src={item.image1}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-full justify-between  ">
                    <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-[1rem] max-sm:flex-col max-sm:items-start max-sm:gap-[1rem]">
                      <p className="text-[1.25rem] flex-1 text-primaryblack max-sm:text-[1rem] max-xsm:text-[1rem]">
                        {item.name}
                      </p>
                      <div className="flex items-center justify-between flex-1 w-full ">
                        <div className="flex items-center  text-[1.25rem] max-sm:text-[1rem] max-xsm:text-[1rem]">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-greyfill px-[1em] py-[.5em] max-sm:px-[.5em] max-sm:py-[.2em] border border-greyborder text-greytext"
                          >
                            -
                          </button>
                          <p className="px-[1em] py-[.5em] font-light border-b max-sm:px-[.5em] max-sm:py-[.2em] border-t border-greyborder text-greytext ">
                            {cartItems[item.id]}
                          </p>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="px-[1em] py-[.5em] max-sm:px-[.5em] max-sm:py-[.2em] bg-greyfill border  border-greyborder text-greytext "
                          >
                            +
                          </button>
                        </div>
                        <p className="text-primaryblack  text-[1.25rem] font-bold max-sm:text-[1.25rem]">
                          ${cartItems[item.id] * item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between max-sm:mt-[1rem] max-md:mt-[1rem] min-md:flex-col  md:items-start  gap-[8px]">
                      <div className="flex flex-col  gap-[4px] font-light text-[.875rem] text-primaryblack  ">
                        <p>Size: Small</p>
                        <p>Colour: Pink</p>
                      </div>
                      {/* <div
                        onClick={(index) => removeFromCart(index)}
                        className="flex items-center  gap-[.825rem] cursor-pointer max-sm:gap-[.5rem]"
                      >
                        <button>
                          <img
                            className="max-sm:h-[20px]"
                            src={bin_icon}
                            alt="bin icon"
                          />
                        </button>
                        <p className="text-redtheme  max-sm:text-[.825rem]">
                          Remove
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
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
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className=" px-[1.5rem]  max-sm:px-[3rem] flex justify-between items-center text-[1.25rem] max-sm:text-[1.25rem] text-primaryblack">
              <p>Tax</p>
              <p>$10</p>
            </div>
            <div className="border-t border-t-greyborder"></div>
            <div className="px-[1.5rem]  max-sm:px-[3rem]  flex justify-between items-center font-bold text-primaryblack text-[2rem]">
              <p>Total</p>
              <p>${getTotalCartAmount() + 50}</p>
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
  ) : (
    <div>
      <div className="font-bold items-center mt-[4rem] flex-col flex min-h-screen gap-[2rem]">
        <p className="text-black text-4xl max-md:text-3xl max-sm:text-2xl ">
          No items added to cart
        </p>
        <Link
          to="/"
          className="text-white text-[2rem] max-md:text-[1.4rem] cursor-pointer transition font-light px-[.9em] py-[.4em] rounded-full bg-browntheme hover:bg-hoverbrown "
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
