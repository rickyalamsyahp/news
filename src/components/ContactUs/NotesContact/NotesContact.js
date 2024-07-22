'use client'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

function NotesContact() {
  const t = useTranslations('contact-us')
  const settings = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 3,
    variableWidth: false,
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
      title: 'Aquafeed',
      location: '8080 Railroad St.',
      city: 'Medan, 12430',
      phone: '+628121638921',
    },
    {
      title: 'Hatchery',
      location: '775 Rolling Green Rd.',
      city: 'Jakarta, 12430',
      phone: '+628121630231',
    },
    {
      title: 'Technical Lab',
      location: '7529 E. Pecan St.',
      city: 'Tangerang, 10232',
      phone: '+628121633631',
    },
    {
      title: 'Aquafeed',
      location: '8080 Railroad St',
      city: 'Tangerang, 10232',
      phone: '+628121633631',
    },
  ]
  return (
    <section className='py-5'>
      <Container>
        <h4 className='fw-bold pb-5'>{t('contact-notes')}</h4>
        <Slider {...settings}>
          {dataCarousel.map((data, index) => (
            <Fragment key={`card-carousel-${index + 1}`}>
              <div className='d-flex flex-column gap-4 border border-light-subtle bg-white p-4 w-75 m-auto'>
                <div className='d-flex flex-column gap-2'>
                  <h5 className='fw-bold'>{data.title}</h5>
                  <h5>{data.location}</h5>
                  <h5>{data.city}</h5>
                </div>
                <h5>{data.phone}</h5>
              </div>
            </Fragment>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default NotesContact
