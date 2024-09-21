'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ThumbsImage({ product }) {
  const settings = {
    focusOnSelect: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    infinite: false,
    dots: true,
    draggable: false,
    dotsClass: 'slick-dots slick-thumb',
    customPaging: function (i) {
      return (
        <Image
          src={process.env.NEXT_PUBLIC_HOST_IMAGE + product.image.data[i].attributes.formats.small.url}
          alt={product.image.data[i].attributes.name}
          height={75}
          width={75}
          className='rounded-3 object-fit-cover'
          key={`image-product-detail-${i}`}
        />
      )
    },
    fade: true,
  }
  return (
    <Slider {...settings} className='slider-container-thumbs-image'>
      {product.image.data?.map((img, index) => (
        <div key={`image-product-detail-${index}`}>
          <Image
            src={process.env.NEXT_PUBLIC_HOST_IMAGE + img.attributes.formats.small.url}
            width={0}
            height={350}
            sizes='100vw'
            alt={img.attributes.name}
            className='rounded-3 object-fit-cover w-100'
          />
        </div>
      ))}
    </Slider>
  )
}

export default ThumbsImage
