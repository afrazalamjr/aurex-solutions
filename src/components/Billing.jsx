import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='design-development' className='w-[100%] h-[100%] relative z-[5]' />
        {/* Gradients remain unchanged */}
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Custom <br className='sm:block hidden'/> Design & Developments.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Aurex Solutions delivers tailored design and development services to bring your vision to life. 
          From UI/UX to full-stack development, we ensure seamless digital experiences.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='app-store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt='google-play' className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>  
    </section>
  );
};

export default Billing
