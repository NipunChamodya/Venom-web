import React from 'react';
//import data
import { product } from '../data';
//import cards
import Cards from './Cards';

const Product = () => {

  //destructure product data
  const {title, subtitle} = product;


  return <section  id='product' className='section'>
    <div className='container mx-auto'>
      {/* title  and subtitles */}

      <div className='flex flex-col items-center lg:flex-row 
      mb-10 lg:mb-20'>
        <h2 className="text-[100px] font-bold leading-[1.0] break-words 
               animate-gradient bg-gradient-to-r from-black via-[#6D5FD5] to-purple-800 
               bg-clip-text text-transparent section-title"
    data-aos="fade-up" 
    data-aos-offset="300" 
    data-aos-delay="200">
  {title}
</h2>

        <p className='section-subtitle' data-aos='fade-up' 
        data-aos-offset='300' aos-delay='200' >
          {subtitle}
        </p>
      </div>
      {/* cards */}
      <Cards/>

    </div>
    
    </section>;
};

export default Product;
