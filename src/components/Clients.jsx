import React from 'react'
import Slider from "react-slick"
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className="w-full">
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center items-center">
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                <img
                  src={client.logo}
                  alt='client'
                  className='sm:w-[192px] w-[100px] object-contain'
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Clients