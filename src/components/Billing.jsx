import React, { useState } from 'react';
import styles, { layout } from '../style';

const services = [
  {
    title: 'Social Media Design',
    description: 'We design scroll-stopping content and brand visuals for Instagram, Facebook, and more to build your online identity and boost engagement.',
  },
  {
    title: 'Full Stack Development',
    description: 'We develop powerful, scalable web applications using modern tech stacks like React, Node.js, MongoDB, and more.',
  },
  {
    title: 'Business Automation',
    description: 'We automate repetitive business tasks to save time and improve efficiency through customized software workflows.',
  },
  {
    title: 'Ecommerce',
    description: 'We build responsive ecommerce stores that drive sales, enhance UX, and include payment, inventory, and order management systems.',
  },
  {
    title: 'Digital Solutions',
    description: 'From cloud-based ERP systems to CRM tools, we provide full-spectrum digital solutions to grow and manage your business.',
  },
];

const initialDescription = `
Dedicated to helping you and your business grow from inception to success.

We specialize in crafting cutting-edge digital solutions, enhancing your online presence that drives sales with websites and e-commerce stores, and optimizing your operations for greater efficiency and profitability through ERP and cloud solutions.

With our expertise, creativity, and commitment, we turn your ideas into reality, ensuring your business thrives in the digital age.
`;

const Billing = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id='product' className={`${layout.sectionReverse} relative`}>

      {/* ✅ Left Side → Timeline Items Only */}
      <div className="flex flex-col items-start justify-center w-1/2 relative px-6">
        <div className="relative flex flex-col gap-10 mt-6 z-10">
          {services.map((service, index) => {
            const isSelected = selectedService?.title === service.title;
            return (
              <div
                key={index}
                className="flex items-center gap-4 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Dot */}
                <div
                  className={`w-5 h-5 rounded-full border-4 transition-all duration-300 
                    ${isSelected
                      ? 'bg-[#158ec7] border-white scale-125'
                      : 'bg-gradient-to-r from-white to-[#158ec7] border-black'
                    }`}
                />
                {/* Title */}
                <span
                  className={`text-lg sm:text-xl transition-all font-semibold 
                    ${isSelected
                      ? 'text-[#158ec7]'
                      : 'text-white group-hover:text-[#158ec7]'
                    }`}
                >
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Right Side → Text Content */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          {selectedService ? selectedService.title : 'Your Full-Service'} <br className='sm:block hidden' />
          Digital & Software Partner
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5 text-white whitespace-pre-line`}>
          {selectedService ? selectedService.description : initialDescription}
        </p>
      </div>

    </section>
  );
};

export default Billing;
