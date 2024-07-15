import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DynamicCSSVariables from '../components/CustomSlider';

const FilterSidebar = (props) => {
  const { mainCategory } = props;
  const filterCategoryWomen = [
    'Shoes',
    'Jackets',
    'Jewelery',
    'Sweaters',
    'HandBag',
    'Blouse',
  ];
  const filterCategoryMen = ['Jackets'];
  const filterCategoryKids = ['Sweaters'];
  const [filterCategory, setFilterCategory] = useState(filterCategoryWomen);
  
  useEffect(() => {
    if (mainCategory) {
      switch (mainCategory.toLowerCase()) {
        case 'men':
          setFilterCategory(filterCategoryMen);
          break;
        case 'women':
          setFilterCategory(filterCategoryWomen);
          break;
        case 'kids':
          setFilterCategory(filterCategoryKids);
          break;
        default:
          setFilterCategory([]);
      }
    }
  }, [mainCategory]);
  const filterSizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  return (
    <div className="border border-solid sticky top-[20px] h-[700px] bg-white border-greyborder w-[360px] px-[30px] py-[30px] rounded-lg max-sm:hidden max-md:hidden">
      <div className="flex flex-col gap-[2rem]">
        <p>Filter By:</p>
        <div className="flex flex-col gap-[.5rem]">
          <p className="font-medium text-[1rem] text-primaryblack">CATEGORY</p>
          <div className="flex flex-col gap-[.5rem]">
            {/* <div className="flex items-center gap-[.5rem]">
              <Checkbox
                defaultChecked
                style={{
                  color: '#b05405',
                  padding: '0px',
                  margin: '0px',
                  borderWidth: '1px',
                }}
              />
              <label htmlFor="Men" className="font-light  text-primaryblack">
                Dresses
              </label>
            </div> */}

            {filterCategory.map((name, index) => (
              <div key={index} className="flex items-center gap-[.5rem]">
                <Checkbox
                  style={{
                    padding: '0px',
                    margin: '0px',
                    borderWidth: '1px',
                  }}
                  sx={{
                    color: '',
                    '&.Mui-checked': {
                      color: '#b05405',
                    },
                  }}
                />
                <label htmlFor={name} className="font-light text-primaryblack ">
                  {name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[.5rem]">
          <p className="font-medium text-[1rem] text-primaryblack">SIZES</p>
          <div className="flex flex-col gap-[.5rem]">
            {filterSizes.map((name, index) => (
              <div key={index} className="flex items-center gap-[.5rem]">
                <Checkbox
                  style={{
                    padding: '0px',
                    margin: '0px',
                    borderWidth: '1px',
                  }}
                  sx={{
                    color: '',
                    '&.Mui-checked': {
                      color: '#b05405',
                    },
                  }}
                />
                <label htmlFor={name} className="font-light text-primaryblack ">
                  {name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[.5rem]">
          <p className="font-medium text-[1rem] text-primaryblack">PRICES</p>
          <div className="flex flex-col gap-[0rem]">
            <div className="flex justify-between items-center">
              <label htmlFor="range" className="font-light text-primaryblack">
                Range
              </label>
              <p>$120-$1000</p>
            </div>
            <DynamicCSSVariables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
