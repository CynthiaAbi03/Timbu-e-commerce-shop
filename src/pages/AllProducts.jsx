import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import hero_img from '../assets/images/HeroImage.png';

import './styles/shop.css';
import p1_img from '../assets/images/product_1.png';
import heart_icon from '../assets/icons/heart_icon.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import chevron_down from '../assets/icons/chevron-down.svg';
import left_chev from '../assets/icons/left_chev.svg';
import right_chev from '../assets/icons/right_chev.svg';
import Item from '../components/Item';
import { ShopContext } from '../context/ShopContextss';
import PaginationNav from '../components/PaginationNav';
import FilterNav from '../components/FilterNav';
import FilterSidebar from '../components/FilterSidebar';
import { Audio } from 'react-loader-spinner';

const AllProducts = () => {
  const {
    isLoading,
    errorLoading,
    allProductsByPage,
    setShowAlert,
    setPage,
    page,
  } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const [value, setValue] = useState(500);

  useEffect(() => {
    setProducts(allProductsByPage[1] || []);
  }, [page, allProductsByPage]);
  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };
  //   function valuetext(value) {
  //     return `${value}°C`;
  //   }

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
  ) : (
    <div className="min-h-screen">
      <Header />
      <div
        className="bg-hero-pattern bg-contain bg-center h-[279px] mx-auto max-w-[2200px] w-full object-fill"
        style={{ backgroundImage: `url(${hero_img})` }}
      ></div>
      <div className="w-full max-w-[2200px] mx-auto pr-custom-mr pl-custom-ml mt-[44px] gap-[3.5rem] flex flex-col max-sm:pl-[24px] max-sm:pr-[24px] max-md:px-[32px]">
        {/* top nav-area */}
        <FilterNav />

        <div className="flex gap-[2rem]">
          {/*filter category sidebar */}

          <FilterSidebar />

          {/* display-products */}
          <div className="flex flex-col gap-[4rem]">
            <div className="grid grid-cols-3 gap-[1.825rem] w-full max-sm:grid-cols-1 max-sm:gap-[1.5rem] max-md:grid-cols-2 max-md:gap-[1.5rem]">
              {products.map((item, index) => {
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
            <div className="flex items-center justify-center gap-[1.25rem]">
              <PaginationNav />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
