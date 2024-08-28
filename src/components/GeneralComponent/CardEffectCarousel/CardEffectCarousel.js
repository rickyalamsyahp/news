'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ImageCarousel({ dataCarousel }) {
  const settings = {
    dots: true,
    focusOnSelect: true,
    // infinite: dataCarousel?.length > 1 ? true : false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '30px',
    autoplay: true,
    autoplaySpeed: 3000,
    // variableWidth: true,
    arrows: false,
    dots: false,
  }
  return (
    <div className='image-slider-container py-3'>
      {dataCarousel?.length > 1 ? (
        <Slider {...settings}>
          {dataCarousel.map((data, index) => (
            <div key={`card-carousel-${index + 1}`}>
              <Image
                src={data.src}
                alt='carousel-image-1'
                width={0}
                height={0}
                sizes='100vw'
                priority
                className={' card-carousel-image rounded-3 object-fit-cover'}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className='d-grid w-100'>
          <Image
            src={dataCarousel[0].src}
            alt='carousel-image-1'
            width={0}
            height={800}
            sizes='100vw'
            priority
            className={'w-100 mx-auto rounded-3 object-fit-cover'}
            key={`card-carousel`}
          />
        </div>
      )}
    </div>
  )
}
