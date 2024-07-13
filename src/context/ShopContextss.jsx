import React, { createContext, useState } from 'react';
import all_product from '../assets/all_products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [showAlert, setShowAlert] = useState(false);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(newCartItems, 'updated cart items'); // Log updated state
      return newCartItems;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev, [itemId]: prev[itemId] - 1 };
      console.log(newCartItems, 'updated cart items'); // Log updated state
      return newCartItems;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.error(`Product with id ${item} not found in all_product`);
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    console.log(totalItem, 'here');
    console.log('i ran effectively');
    return totalItem;
  };

  const contextValue = {
    all_product,
    getTotalCartAmount,
    getTotalCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    showAlert,
    setShowAlert,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
