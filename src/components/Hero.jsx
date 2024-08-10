import React from "react";

const Hero = () => {
  return (
    <div className='w-[84%] mx-auto'>
      <div className='relative pt-12 h-screen'>
        <img
          className='absolute w-10 top-10 right-0'
          src='/heros-icon.png'
          alt=''
        />
        <div className='pt-10 relative'>
          <h3 className='text-2xl text-[#212529] font-extrabold'>DIGITAL</h3>
          <p className='absolute left-36 bottom-4 border-b border-black w-20'></p>
        </div>
        <h2 className='-mt-10 absolute left-0 text-[190px] text-[#121212] font-extrabold'>
          MARK
        </h2>
        <h2 className='absolute top-52 right-0 z-0 text-[190px] text-[#121212] font-extrabold'>
          MARK
        </h2>

        <p className='absolute top-[340px] max-w-[285px] text-[#212529] text-justify '>
          Static and dynamic secure code review can prevent a day before your
          product is event released. We can integrate with your dev environment
        </p>

        <div className='absolute right-10 top-16'>
          <video
            className='w-20'
            src='https://www.youtube.com/watch?v=WmB9WDydTxk&pp=ygUUYmRjYWxsaW5nIGl0IGxpbWl0ZWQ%3D'
          ></video>
          <p className='uppercase'>
            Watch <br /> video intro
          </p>
        </div>
      </div>

      <div className='absolute z-0 -bottom-24 right-0 border'>
        <img className='w-[1000px] h-[300px]' src='/hero.png' alt='' />
      </div>
    </div>
  );
};

export default Hero;
