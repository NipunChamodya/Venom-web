import React from 'react';
import { features } from '../data';

const Feature1 = () => {

  //distruture features
  const {feature1} = features;

  //distructure feature1
  const { title, subtitle, btnIcon, image} = feature1;


  return <section id='f1' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1' data-aos='fade-right' data-aos-offset='200'>
  
        <h2 className="text-[70px] font-bold leading-[1.5] break-words 
               animate-gradient bg-gradient-to-r from-black via-[#6D5FD5] to-purple-800 
               bg-clip-text text-transparent">
  {title}
</h2>

          <p className='pretitle leading-[1.9] '>{subtitle}</p>
          

          <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
            
            <img src={btnIcon}alt=''/>
          </button>

        </div>
        {/* image */}
        <div className='flex-1' data-aos='fade-left' data-aos-offset='100'>
          <img src={image} alt=''/>
        </div>

      </div>
    </div>
    </section>;
};

export default Feature1;
