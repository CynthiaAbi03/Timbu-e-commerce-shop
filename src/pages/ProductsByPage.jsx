import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import hero_img from '../assets/images/HeroImage.png';
import Checkbox from '@mui/material/Checkbox';
import DynamicCSSVariables from '../components/CustomSlider';
import './styles/shop.css';
import p1_img from '../assets/images/product_1.png';
import heart_icon from '../assets/icons/heart_icon.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import chevron_down from '../assets/icons/chevron-down.svg';
import left_chev from '../assets/icons/left_chev.svg';
import right_chev from '../assets/icons/right_chev.svg';
import Item from '../components/styles/Item';
import { ShopContext } from '../context/ShopContextss';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import PaginationNav from '../components/PaginationNav';
import FilterNav from '../components/FilterNav';
import FilterSidebar from '../components/FilterSidebar';

const ProductsByPage = () => {
  const {
    errorLoading,
    isLoading,
    allProductsByPage,
  } = useContext(ShopContext);
  const { page } = useParams();
  const [pageProduct, setPageProduct] = useState([]);

  const [value, setValue] = useState(500);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  
  const productsForAPage = allProductsByPage[page] || [];


  useEffect(() => {
    console.log(page, 'page number clicked here');
    console.log(productsForAPage, 'products for a page')
    setPageProduct(productsForAPage);
  },[page, allProductsByPage])

  return isLoading ? (
    <div>Loading</div>
  ) : errorLoading? (
    <div>Error Loading</div>
  ):(
    <div className="min-h-screen">
      <Header />
      <div
        className="bg-hero-pattern bg-contain bg-center h-[279px] mx-auto max-w-[2200px] w-full object-fill"
        style={{ backgroundImage: `url(${hero_img})` }}
      ></div>
      <div className="w-full max-w-[2200px] mx-auto pr-custom-mr pl-custom-ml mt-[44px] gap-[3.5rem] flex flex-col max-sm:pl-[24px] max-sm:pr-[24px] max-md:px-[32px]">
        {/* top nav-area */}

        <FilterNav/>

        <div className="flex gap-[2rem]">
          {/* filter nav sidebar */}
          <FilterSidebar/>
          <div className="flex flex-col gap-[4rem]">
            {/* display-products */}
            <div className="grid grid-cols-3 gap-[1.825rem] w-full max-sm:grid-cols-1 max-sm:gap-[1.5rem] max-md:grid-cols-2 max-md:gap-[1.5rem]">
              {pageProduct.map((item, index) => {
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
            <PaginationNav/>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsByPage;
