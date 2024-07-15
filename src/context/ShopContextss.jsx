import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../api/api';
import { parser } from '../api/api';
import all_product from '../assets/all_products';
import { parse } from 'dotenv';
import ProductsByPage from '../pages/ProductsByPage';

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  if (products) {
    for (let product of products) {
      cart[product.id] = 0; // Initialize each product ID with a quantity of 0
    }
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [page, setPage] = useState(1);
  const [allShopProducts, setAllShopProducts] = useState();
  const [allProductsByPage, setAllProductsByPage] = useState({ 1: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [clearLocalStorage, setClearLocalStorage] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    // const fetchDataByPage = async () => {
    //   try {
    //     setIsLoading(true);
    //     const products = await fetchProducts({ page: page, size: 10 });
    //     const parsedProducts = parser(products);
    //     console.log(parsedProducts, 'parsed products logged in fetchDataByPage shopcontext');
    //     console.log(parsedProducts.length, 'length of all products logged in fetchDataByPage context');
    //     setAllProductsByPage((prevProducts) => ({
    //       ...prevProducts,
    //       [page]: parsedProducts,
    //     }));
    //     localStorage.setItem(
    //       `allProductsByPage${page}`,
    //       JSON.stringify(parsedProducts)
    //     );

    //     setIsLoading(false);
    //   } catch (error) {
    //     console.error('Error fetching products logged in fechData ShopContext:', error);
    //     setIsLoading(false);
    //     setErrorLoading(true);
    //   }
    // };

    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        const products = await fetchProducts({ page: 1, size: 31 });
        const parsedProducts = parser(products);
        console.log(parsedProducts, 'logged in fetchAllData ShopContext');
        console.log(
          parsedProducts.length,
          'length of all products logged in fetchAllData context'
        );
        setAllShopProducts(parsedProducts);
        localStorage.setItem('allShopProducts', JSON.stringify(parsedProducts));
        if (parsedProducts && parsedProducts.length > 0) {
          setCartItems(getDefaultCart(parsedProducts));
        }

        const totalPages = Math.ceil(parsedProducts.length / 10);

        // pagination logic

        let productsByPage = {};
        for (let page = 1; page <= totalPages; page++) {
          const startIndex = (page - 1) * 10;
          const endIndex = Math.min(page * 10, parsedProducts.length);
          const productsForPage = parsedProducts.slice(startIndex, endIndex);
          productsByPage[page] = productsForPage;
          localStorage.setItem(
            `allProductsByPage${page}`,
            JSON.stringify(productsForPage)
          );
        }
        console.log(productsByPage, 'products by page');
        setAllProductsByPage(productsByPage);
        localStorage.setItem(
          `allProductsByPage`,
          JSON.stringify(productsByPage)
        );
        setIsLoading(false);
      } catch (error) {
        console.error(
          'Error fetching all shop products logged in fetchAllData:',
          error
        );
        setIsLoading(false);
        setErrorLoading(true);
      }
    };

    const clearItemsFromLocalStorage = () => {
      localStorage.removeItem('allProductsByPage');
      localStorage.removeItem('allShopProducts');
    };

    const fetchLocalStorageData = () => {
      const storedProducts = localStorage.getItem(`allProductsByPage`);
      if (storedProducts) {
        try {
          const parsedProducts = JSON.parse(storedProducts);
          // setAllProductsByPage((prevProducts) => ({
          //   ...prevProducts,
          //   [page]: parsedProducts,
          // }));
          setAllProductsByPage(parsedProducts);
        } catch (error) {
          console.error('Error parsing JSON from localStorage:', error);
          fetchDataByPage();
        }
      } else {
        // fetchDataByPage();
        fetchAllData();
      }

      const storedShopProducts = localStorage.getItem('allShopProducts');
      // setCartItems(getDefaultCart(parsedProducts));
      if (storedShopProducts) {
        try {
          const parsedShopProducts = JSON.parse(storedShopProducts);
          setAllShopProducts(parsedShopProducts);
        } catch (error) {
          console.error(
            'Error parsing JSON for all shop products from localstorage:',
            error
          );
          fetchAllData();
        }
      } else {
        fetchAllData();
      }

      if (clearLocalStorage) {
        clearItemsFromLocalStorage();
      }
    };

    fetchLocalStorageData();
  }, []);

  useEffect(() => {
    console.log(cartItems, 'cartItems');
  }, []);
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
      console.log(newCartItems, 'updated cart items');
      return newCartItems;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allShopProducts.find(
          (product) => product.id === item
        );
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.error(`Product with id ${item} not found in all_product`);
        }
      }
    }
    console.log(totalAmount, 'HERE sdvksnksdkns');
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    // console.log(totalItem, 'here');
    // console.log('i ran effectively');
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
    allProductsByPage,
    setPage,
    page,
    allShopProducts,
    isLoading,
    errorLoading,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
