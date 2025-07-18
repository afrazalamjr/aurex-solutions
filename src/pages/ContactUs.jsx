import React from 'react';
import styles from '../style';

const ContactUs = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <h1 className="text-white font-poppins font-bold text-4xl mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded bg-black-gradient text-white border border-gray-700"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded bg-black-gradient text-white border border-gray-700"
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full p-3 rounded bg-black-gradient text-white border border-gray-700"
              ></textarea>
              <button className="bg-blue-gradient text-black font-poppins font-medium py-2 px-6 rounded">
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1 text-dimWhite font-poppins">
            <h3 className="text-white text-xl font-bold mb-4">Our Contact Information</h3>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Business St, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;