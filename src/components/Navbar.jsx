import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar relative'> {/* Added relative */}
      {/* Logo container with overflow handling */}
    <div className='flex items-center h-[50px] mt-4'> {/* Added mt-2 to push container down */}
  <img 
    src={logo} 
    alt='Aurex' 
    className='w-[180px] h-auto object-contain object-left'
    style={{ 
      transform: 'scale(1.2)', 
      transformOrigin: 'left center',
      marginTop: '4px' // Added slight vertical offset
    }}
  />
</div>
      
      {/* Desktop Navigation */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover:text-aurex-blue transition-colors`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>        
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white hover:text-aurex-blue`}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>        
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;