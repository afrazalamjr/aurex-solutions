import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className="bg-dolyDark">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            
            {/* Logo Section */}
            <div className="flex-1 max-w-md">
              <img
                src={logo}
                alt='Aurex Solutions'
                className='w-[200px] h-auto object-contain mb-6'
              />
              <p className="text-dimWhite text-sm leading-relaxed mb-6">
                Aurex Solutions delivers cutting-edge digital experiences. 
                We combine sleek design with robust development to bring your vision to life.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dolyBlue/10 rounded-full flex items-center justify-center hover:bg-dolyBlue/20 transition-colors"
                  >
                    <img
                      src={social.icon}
                      alt={social.id}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Contact */}
              <div>
                <h4 className='font-poppins font-semibold text-[18px] leading-[27px] text-white mb-6'>
                  Contact
                </h4>
                <ul className='list-none space-y-3'>
                  <li>
                    <a
                      href="mailto:info@aurexsolutions.com"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      info@aurexsolutions.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+923001234567"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      +92 300 123 4567
                    </a>
                  </li>
                  <li>
                    <span className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite'>
                      Karachi, Pakistan
                    </span>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className='font-poppins font-semibold text-[18px] leading-[27px] text-white mb-6'>
                  Company
                </h4>
                <ul className='list-none space-y-3'>
                  <li>
                    <a
                      href="/about"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="/team"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className='font-poppins font-semibold text-[18px] leading-[27px] text-white mb-6'>
                  Support
                </h4>
                <ul className='list-none space-y-3'>
                  <li>
                    <a
                      href="/help"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-dolyBlue transition-colors'
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-dolyBlue/20 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className='font-poppins font-normal text-center text-[14px] leading-[20px] text-dimWhite'>
            © 2024 Aurex Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer