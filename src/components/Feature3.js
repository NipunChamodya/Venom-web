import React from 'react';
import { features } from '../data';

const Feature3 = () => {

  //distruture features
  const {feature3} = features;

  //distructure feature2
  const { title, subtitle, btnLink, btnIcon, image} = feature3;


  return <section id='f3' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 order-2 lg:order1' data-aos='fade-left' data-aos-offset='300'>
        
        <h2 className="text-[70px] font-bold leading-[1.0] break-words 
               animate-gradient bg-gradient-to-r from-black via-[#6D5FD5] to-purple-800 
               bg-clip-text text-transparent">
  {title}
</h2>
          <p className='pretitle leading-[1.9] mt-6'>{subtitle}</p>

          <button className='btn-link flex items-center gpa-x-3 hover:gap-x-5 transition-all'>
            {btnLink}
            <img src={btnIcon}alt='' className='text-white'/>
          </button>

        </div>
        {/* image */}
        <div className='flex-1 order-1 lg:order_2' data-aos='fade-right' data-aos-offset='100'>
          <img src={image} alt=''/>
        </div>

      </div>
    </div>
    </section>;
};

export default Feature3;
