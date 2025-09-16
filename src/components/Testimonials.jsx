import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='testimonials' className={`${styles.paddingY} flex-col relative`}>
      {/* Profile pictures cluster */}
      <div className='flex justify-center mb-12'>
        <div className='flex -space-x-2'>
          {feedback.slice(0, 5).map((_, index) => (
            <div key={index} className='w-12 h-12 rounded-full bg-gradient-to-br from-dolyBlue/20 to-dolyBlue/5 border-2 border-dolyBlue/30 flex items-center justify-center'>
              <div className='w-8 h-8 rounded-full bg-dolyBlue/40'></div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  )
}

export default Testimonials
