import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

const WhoWeAre = () => {
  return (
    <div className='bg-[#121212] mt-32'>
      <p className='border-b-2 border-b-white'></p>
      <div className='border w-[86%] mx-auto pt-20 grid grid-cols-1 lg:grid-cols-2'>
        <div className='border-2'>
          <img className='border-2 h-auto' src='/who-we-are.webp' alt='' />
        </div>
        <div className='border-4'>
          <h3 className='text-white text-xl font-bold'>Who We Are</h3>
          <h2 className='text-7xl text-white font-extrabold kanit'>
            We are leading digital marketing agency.
          </h2>

          <div className='pl-40 pt-16'>
            <div className='min-h-svh border-l border-l-gray-600'>
              <p className='text-white pl-5'>
                We’re a team of strategic mdigital marketing working globally
                with largest brands, We believe that progress only happens when
                you refused to play things safe. We combine ideas and behaviors,
                and insights with design, technological data to produce brand
                experiences that customers love our services.
              </p>

              <button className='size-40 ml-5 mt-8 border border-gray-400 rounded-full text-gray-200 flex items-center justify-center gap-2'>
                <span>Explore Us</span>{" "}
                <PiArrowUpRightBold className='text-xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
