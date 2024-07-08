import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import hero_img from '../assets/images/HeroImage.png'
import Footer from '../components/Footer';
import Header from '../components/Header';
import chevron_down from '../assets/icons/chevron-down.svg';

const Shop = () => {
  return (
    <div className='min-h-screen'>
        <Header/>
      <div className="bg-hero-pattern bg-cover bg-center h-[279px] mx-auto max-w-[2200px] w-full" style={{backgroundImage: `url(${hero_img})`}}>
      </div>
      <div className='w-full max-w-[2200px] pr-custom-mr pl-custom-ml mt-[44px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[1.625rem]'>
                <p>Sort by:</p>
                <button className='flex items-center py-[0.625em] px-[0.625em] gap-[6px] border border-solid border-greyborder rounded-md '>
                    <p className='font-light text-primaryblack'>Low to high</p>
                    <div>
                        <img src={chevron_down} alt="chevron down icon" />
                    </div>
                </button>
            </div>
            <div className='flex items-center e text-[1.25rem] gap-[2rem]'>
                <NavLink className='font-medium text-browntheme' href="#">All Products</NavLink>
                <NavLink className="font-light" href="#">Men</NavLink>
                <NavLink className="font-light" href="#">Women</NavLink>
                <NavLink className="font-light" href="#">Children</NavLink>
            </div>
            <div className='flex text-primaryblack'>
                <p className='font-medium text-[1rem]'>Showing <span className='font-light'> 1-20 of 1000 results</span></p>

            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
