import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Seamless Workflows, <br className='sm:block hidden'/> Powered by Aurex.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our design and development processes are optimized for efficiency, 
          ensuring your project is delivered on time and exceeds expectations.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='design-process' className='w-[100%] h-[100%]' />
      </div>
    </section>
  );
};

export default CardDeal
