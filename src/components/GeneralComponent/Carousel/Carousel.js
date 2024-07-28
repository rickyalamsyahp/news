'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel1 from '../../../assets/images/carousel-1.png'
import Carousel2 from '../../../assets/images/carousel-2.png'
import Carousel3 from '../../../assets/images/carousel-3.png'
import { ButtonSecondary } from '../CustomButton/CustomButton'
import { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from '../../../navigation'

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
  const dataCarousel = [
    {
      src: Carousel1,
    },
    {
      src: Carousel2,
    },
    {
      src: Carousel3,
    },
  ]
  return (
    <div className='slider-container py-3'>
      <Slider {...settings}>
        {dataCarousel.map((data, index) => (
          <Fragment key={`card-carousel-${index + 1}`}>
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
                <ButtonSecondary>
                  <Link href='/news-article'> Read More</Link>
                </ButtonSecondary>
              </div>
              <Image
                src={data.src}
                alt='carousel-image-1'
                priority
                className='m-auto w-100 h-100 rounded-2'
              />
            </div>
            <Card className='d-block d-lg-none card-responsive'>
              <Image
                alt='carousel-image-1'
                priority
                src={data.src}
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
                <ButtonSecondary mobile={true}>
                  <Link href='/news-article'> Read More</Link>
                </ButtonSecondary>
              </Card.Body>
            </Card>
          </Fragment>
        ))}
      </Slider>
    </div>
  )
}
