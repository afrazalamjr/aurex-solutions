import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Celebrating 100 Clients:</span> 20% OFF All Services {" "}
            <span className='text-white'>Limited Time</span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[42px] text-white ss:leading-[90px] leading-[65px]'>
            Innovate With<br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Aurex</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted className="scale-90"/> {/* Reduced arrow size */}
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[15px] leading-[26px]`}>
          Aurex Solutions delivers cutting-edge digital experiences. 
          We combine sleek design with robust development to bring your vision to life.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='design-development'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted className="scale-85"/> {/* Smaller for mobile */}
      </div>
    </section>
  )
}

export default Hero