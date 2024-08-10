import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

const Service = () => {
  return (
    <div className='w-[86%] mx-auto mt-20'>
      <div className='ml-72'>
        <h3 className='uppercase text-lg text-[#707070]'>Services</h3>
        <h2 className='text-5xl text-[#121212]'>
          Our marketing <br />
          Services
        </h2>
      </div>

      <div className='max-w-[550px] mx-auto'>
        <p className='text-[#565656] text-lg pl-10 py-20 my-10 border-l'>
          Consumers today rely heavily on digital means to research products. We
          research a brand of bldend engaging with it, according to the
          meanwhile, 51% of consumers say they use Google to research products
          before buying.
        </p>
      </div>

      <div>
        <div className='grid grid-cols-4 gap-5'>
          <h2 className='text-3xl font-semibold text-[#121212]'>
            Search Engine Optimization
          </h2>

          <div className='col-span-2 *:text-[#121212]'>
            <p className='max-w-[340px] text-lg'>
              We help brands stand out through aweful, elegant visual design.
              Our design mainly philosophy.
            </p>
            <ul className='mt-5 space-y-3 text-lg'>
              <li>+ Logo Design</li>
              <li>+ Advertisement</li>
              <li>+ Promotion</li>
            </ul>
          </div>

          <button className='ml-auto size-40 mt-8 border border-gray-400 rounded-full text-gray-800 flex items-center justify-center gap-2'>
            <span>Explore Us</span> <PiArrowUpRightBold className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
