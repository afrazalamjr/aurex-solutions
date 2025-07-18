import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Ready to Transform Your Enterprise? <br className='sm:block hidden'/> 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

Get in touch with our team to discuss your specific needs and discover how our innovative solutions can drive your business forward.        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='design-process' className='w-[100%] h-[100%]' />
      </div>
    </section>
  );
};

export default CardDeal
