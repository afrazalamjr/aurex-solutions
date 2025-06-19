import styles from '../style'
import { robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>
      
      {/* Left Side */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative z-[2] md:-mt-12 -mt-8`}>
        
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[42px] text-white ss:leading-[80px] leading-[60px]'>
            Innovate With <br className='sm:block hidden' />
            <span className="bg-gradient-to-r from-white to-[#158ec7] bg-clip-text text-transparent">Aurex</span>{" "}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted className="scale-90" />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-3 text-[15px] leading-[24px] text-white`}>
          Aurex Solutions delivers cutting-edge digital experiences. 
          We combine sleek design with robust development to bring your vision to life.
        </p>
      </div>

      {/* Right Side (Hero Image + Background) */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='design-development'
          className='w-[100%] h-[100%] relative z-[5]'
        />

        {/* Gradients */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 bg-gradient-to-r from-white to-[#158ec7] opacity-20 rounded-full" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-white to-transparent bottom-40 opacity-10" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 bg-gradient-to-r from-white to-[#158ec7] opacity-20 rounded-full" />
      </div>

      {/* Button for Mobile */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted className="scale-85" />
      </div>

    </section>
  )
}

export default Hero
