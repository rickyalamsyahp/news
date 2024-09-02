'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import Thumbnail from '../../../assets/images/species-common-carp.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ThumbsImage({ product }) {
  const dataProduct = product?.image?.data.map((res, index) => ({
    src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res?.attributes?.url}`,
  }))

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
          src={dataProduct[i].src}
          alt={'image-product-detail'}
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
      {dataProduct?.map((data, index) => (
        <div key={`image-product-detail-${index}`}>
          <Image
            src={data.src}
            width={0}
            height={350}
            sizes='100vw'
            alt={'image-product-detail'}
            className='rounded-3 object-fit-cover w-100'
          />
        </div>
      ))}
    </Slider>
  )
}

export default ThumbsImage
