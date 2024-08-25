'use client'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import { dataUnit } from './DataContact'

function NotesContact({ address }) {
  const t = useTranslations('contact-us')

  const settings = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px',
          arrows: false,
        },
      },
    ],
  }
  return (
    <section className='py-5'>
      <Container>
        <h4 className='fw-bold pb-5'>{t('contact-notes')}</h4>
        <Slider {...settings}>
          {address.map((data, index) => (
            <Fragment key={`card-carousel-${index + 1}`}>
              <div
                className='d-flex flex-column gap-4 border border-light-subtle bg-white p-4 w-75 m-auto'
                style={{ height: '250px' }}
              >
                <div className='d-flex flex-column gap-2'>
                  <h5 className='fw-bold'>{data.attributes.title}</h5>
                  <h5>{data.attributes.address}</h5>
                  <h5>{data.attributes.city}</h5>
                </div>
                <h5>{data.attributes.phone}</h5>
              </div>
            </Fragment>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default NotesContact
