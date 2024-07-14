import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router';
import { ShopContext } from '../context/ShopContextss';
import arrow_back from '../assets/icons/arrow_back.svg';

const Product = () => {
  const { productid } = useParams();
  const { allShopProducts } = useContext(ShopContext);

  const filteredProducts = allShopProducts.filter(
    (product) => product.id === productid
  );

  useEffect(() => {
    console.log('View Filtered Products', filteredProducts);
    console.log(productid, 'id hhere');
  });
  // const filteredProducts = allShopProducts.filter(
  //   (product) => product.type.toLowerCase() === mainCategory.toLowerCase()
  // );
  return (
    <div>
      <Header />
      <div className="flex items-center gap-[.5rem]">
        <Link
          className="w-[48px] h-[48px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-none flex items-center justify-center hover:bg-gray-200 transition"
          to="/allproducts/display/1"
        >
          <img
            className="h-[38px] w-[38px] max-sm:w-[34px] max-sm:h-[34px]"
            src={arrow_back}
            alt="back arrow"
          />
        </Link>
        <p className="text-[1.5rem] max-sm:text-[1.5rem]">Back</p>
      </div>
      <div className="w-full max-w-[2200px] mx-auto pr-custom-mr pl-custom-ml mt-[44px] gap-[3.5rem]  flex flex-col max-sm:pl-[24px] max-sm:pr-[24px] max-md:px-[32px]">
        {filteredProducts.map((item, index) => {
          return (
            <ProductDetails
              key={index}
              id={item.id}
              name={item.name}
              image1={item.image1}
              image2={item.image2}
              price={item.price}
              description={item.description}
              category={item.category}
              type={item.type}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
