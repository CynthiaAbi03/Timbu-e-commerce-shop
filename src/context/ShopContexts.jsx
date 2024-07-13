import React, { createContext, useEffect, useState } from 'react';
import all_product from '../assets/all_products';

export const ShopContext = createContext(null);


const ShopContextProviders = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0); // Initialize totalProduct with a default value

    const addToCart = (index) => {
        const product = all_product[index];
        setCartItems((prev) => {
            const itemIndex = prev.findIndex(item => item.id === product.id);
            if (itemIndex !== -1) {
                const updatedCart = [...prev];
                updatedCart[itemIndex] = {
                    ...updatedCart[itemIndex],
                    quantity: updatedCart[itemIndex].quantity + 1,
                };
                return updatedCart;
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });

     
    };
    useEffect(() => {
        console.log(cartItems, 'jellp'); // Log cartItems whenever it changes
    }, [cartItems]);

    const removeFromCart = (index) => {
        setCartItems((prev) => {
            const updatedCart = prev.filter(item => item.id !== index);
            return updatedCart;
        });
    };

    const handleProductAdd = (index) => {
        const updatedCart = cartItems.map((item, i) => {
            if (i === index) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const handleProductSubstract = (index) => {
        const updatedCart = cartItems.map((item, i) => {
            if (i === index && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    useEffect(() => {
        const totalProductQty = () => {
            let total = 0;
            if (cartItems && cartItems.length > 0) {
                for (let item of cartItems) {
                    total += item.quantity;
                }
            }
            setTotalProduct(total * 200);
        };
        totalProductQty();
    }, [cartItems]); // Correct dependency array to cartItems

    const contextValue = {
        all_product,
        cartItems,
        totalProduct,
        handleProductAdd,
        addToCart,
        handleProductSubstract,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProviders;
