import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-10 py-6 border-b'>
      <div className=''>
        <img src='/logo-black.webp' alt='logo' />
      </div>

      <div className=''>
        <ul className='flex justify-between items-center gap-20 *:text-base *:font-normal *:uppercase *:text-[rgb(18, 18, 18)]'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Pages</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Team</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>

      <div className='flex gap-8'>
        <button>
          <IoSearch className='text-lg' />
        </button>
        <button>
          <img src='/menu-black.webp' alt='menu' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
