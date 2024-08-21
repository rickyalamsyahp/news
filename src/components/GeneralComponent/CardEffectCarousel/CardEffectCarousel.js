'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ImageCarousel({ dataCarousel }) {
  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    arrows: false,
  }
  return (
    <div className='image-slider-container py-3'>
      <Slider {...settings}>
        {dataCarousel.map((data, index) => (
          <Image
            src={data.src}
            alt='carousel-image-1'
            priority
            className='rounded-3'
            key={`card-carousel-${index + 1}`}
          />
        ))}
      </Slider>
    </div>
  )
}
