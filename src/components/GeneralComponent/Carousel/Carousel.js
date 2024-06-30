'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card1 from '../../../assets/images/sh-min.png'
import { ButtonSecondary } from '../CustomButton/CustomButton'
import { Fragment } from 'react'
import { Card } from 'react-bootstrap'

export default function Carousel() {
  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  }
  return (
    <div className='slider-container py-3'>
      <Slider {...settings}>
        {[0, 1, 2].map(data => (
          <Fragment key={`card-carousel-${data + 1}`}>
            <div className='card-container px-2 position-relative d-none d-lg-block'>
              <div className='card-carousel position-absolute p-4 text-white rounded-3'>
                <div className='mb-3 d-flex flex-column gap-2'>
                  <h6>Genre</h6>
                  <h4>Title Should be Here, This is The longest Title</h4>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur. Aenean adipiscing
                    hendrerit maecenas pharetra.
                  </h6>
                </div>
                <ButtonSecondary>Read More</ButtonSecondary>
              </div>
              <Image
                src={Card1}
                alt='carousel-image-1'
                priority
                className='m-auto w-100 h-100 rounded-2'
              />
            </div>
            <Card className='d-block d-lg-none card-responsive'>
              <Image
                alt='carousel-image-1'
                priority
                src={Card1}
                className='m-auto w-100 h-100 rounded-top-2'
              />
              <Card.Body className='bg-dark rounded-bottom-2'>
                <div className='mb-3 d-flex flex-column gap-2 text-white nunito-sans'>
                  <h6>Genre</h6>
                  <h4 className='fw-bold'>
                    Title Should be Here, This is The longest Title
                  </h4>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur. Aenean adipiscing
                    hendrerit maecenas pharetra.
                  </h6>
                </div>
                <ButtonSecondary mobile={true}>Read More</ButtonSecondary>
              </Card.Body>
            </Card>
          </Fragment>
        ))}
      </Slider>
    </div>
  )
}
