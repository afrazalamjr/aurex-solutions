import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

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
            className={`font-poppins font-normal text-[16px] ${
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover:text-dolyBlue transition-colors relative`}
            onMouseEnter={() => nav.hasDropdown && setServicesDropdown(true)}
            onMouseLeave={() => nav.hasDropdown && setServicesDropdown(false)}
          >
            {nav.hasDropdown ? (
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <span className="cursor-pointer">
                  {nav.title}
                </span>
                {servicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-dolyGray rounded-lg shadow-lg z-50 border border-dolyBlue/20">
                    <div className="py-2">
                      {nav.dropdownItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          className="block px-4 py-3 text-white hover:bg-dolyBlue/10 hover:text-dolyBlue transition-colors"
                          onClick={() => setServicesDropdown(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to={nav.path}>
                {nav.title}
              </Link>
            )}
          </li>        
        ))}
        {/* Get Started Button */}
        <li className="ml-6">
          <Link 
            to="/contact" 
            className="bg-dolyBlue text-white font-semibold px-6 py-2 rounded-lg hover:bg-dolyBlue/90 transition-colors"
          >
            Get Started
          </Link>
        </li>
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
        } p-6 bg-dolyGray absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar z-50 border border-dolyBlue/20`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal text-[16px] ${
                  i === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white hover:text-dolyBlue w-full`}
              >
                {nav.hasDropdown ? (
                  <div className="w-full">
                    <div className="text-center mb-2 font-semibold">{nav.title}</div>
                    <div className="ml-4 space-y-2">
                      {nav.dropdownItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          className="block text-sm text-dimWhite hover:text-dolyBlue transition-colors"
                          onClick={() => setToggle(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={nav.path} onClick={() => setToggle(false)} className="text-center">
                    {nav.title}
                  </Link>
                )}
              </li>        
            ))}
            {/* Mobile Get Started Button */}
            <li className="mt-4 w-full">
              <Link 
                to="/contact" 
                onClick={() => setToggle(false)}
                className="block w-full bg-dolyBlue text-white font-semibold px-6 py-2 rounded-lg hover:bg-dolyBlue/90 transition-colors text-center"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;