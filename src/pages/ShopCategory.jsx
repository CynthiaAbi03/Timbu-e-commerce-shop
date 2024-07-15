import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import hero_img from '../assets/images/HeroImage.png';
import './styles/shop.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PaginationNav from '../components/PaginationNav';
import Item from '../components/styles/Item';
import { ShopContext } from '../context/ShopContextss';
import FilterNav from '../components/FilterNav';
import FilterSidebar from '../components/FilterSidebar';

const ShopCategory = () => {
  const navigate = useNavigate();
  const { mainCategory } = useParams();
  const { all_product, showAlert, setShowAlert, allShopProducts } =
    useContext(ShopContext);
  const filteredProducts = allShopProducts.filter(
    (product) => product.type.toLowerCase() === mainCategory.toLowerCase()
  );
  return (
    <div className="min-h-screen">
      <Header mainCategory = {mainCategory}/>
      <div
        className="bg-hero-pattern bg-contain bg-center h-[279px] mx-auto max-w-[2200px] w-full"
        style={{ backgroundImage: `url(${hero_img})` }}
      ></div>
      <div className="w-full max-w-[2200px] mx-auto pr-custom-mr pl-custom-ml mt-[44px] gap-[3.5rem] flex flex-col max-sm:pl-[24px] max-sm:pr-[24px] max-md:px-[32px]">
        {/* top nav-area */}
        <FilterNav />

        <div className="flex gap-[2rem]">
          {/* sidebar */}
          <FilterSidebar mainCategory = {mainCategory} />

          {/* display-products */}
          <div className="flex flex-col gap-[4rem]">
            <div className="grid grid-cols-3 gap-[1.825rem] w-full max-sm:grid-cols-1 max-sm:gap-[1.5rem] max-md:grid-cols-2 max-md:gap-[1.5rem]">
              {filteredProducts.map((item, index) => {
                return (
                  <Item
                  
                    key={index}
                    id={item.id}
                    name={item.name}
                    images={item.image1}
                    price={item.price}
                    category={item.category}
                  />
                );
              })}
            </div>
            {/* display pagination nav */}
            {/* <div className="flex items-center justify-center gap-[1.25rem]">
              <PaginationNav />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategory;
