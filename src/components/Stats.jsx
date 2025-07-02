import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.3      // 30% of the component should be visible
  })

  return (
    <section ref={ref} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => {
        const match = stat.value.match(/[\d,]+/)
        const endValue = match ? parseInt(match[0].replace(/,/g, '')) : 0
        const suffix = stat.value.replace(/[\d,]+/, '')

        return (
          <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {inView ? <CountUp end={endValue} duration={2} separator="," /> : 0}{suffix}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] bg-gradient-to-r from-white to-[#158ec7] bg-clip-text text-transparent uppercase ml-3">
              {stat.title}
            </p>
          </div>
        )
      })}
    </section>
  )
}

export default Stats
