import React from 'react';
//import data
import  {testimonials} from '../data';

//import components
import ClientSlider from '../components/ClientSlider';

const Testimonials = () => {
  //destruture testiminitols
  const {title, clients } = testimonials;

  return <section id='test' className='section'>
    <div className=' container mx-auto'>
      {/*title*/}
      <h2 className="text-[70px] font-bold leading-[1.0] break-words 
               animate-gradient bg-gradient-to-r from-black via-[#6D5FD5] to-purple-800 
               bg-clip-text text-transparent text-center">
  {title}
</h2>
      {/*slider*/}
      <div className='mt-9'> 
        <ClientSlider clients={clients}/>
      </div>
    </div>

    </section>;
};

export default Testimonials;
