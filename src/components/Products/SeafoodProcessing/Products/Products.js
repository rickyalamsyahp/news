'use client'

import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Tilapia from '../../../../assets/images/tilapia.png'
import TobaTilapia from '../../../../assets/images/toba-tilapia.png'
import Shrimp from '../../../../assets/images/shrimp.png'
import SeafoodLover from '../../../../assets/images/seafood-lover.png'
import Siomay from '../../../../assets/images/siomay.png'
import PrimeSeafood from '../../../../assets/images/prime-seafood.png'
import { useTranslations } from 'next-intl'
import { Title } from '../../../GeneralComponent/Title/Title'

function Products({ dataTobaTolapia, dataSeafoodLovers, dataPrimeSeafood }) {
  const t = useTranslations('seafood-processing')
  return (
    <section className='overflow-hidden section-seafood-processing'>
      <Container>
        <Row className='align-items-center position-relative pt-5 mb-5 mb-md-0'>
          <Col md={6} className='d-flex flex-column gap-3'>
            <Image
              src={`${dataTobaTolapia ? process.env.NEXT_PUBLIC_HOST_IMAGE + dataTobaTolapia[0].image.data[0].attributes.url : TobaTilapia}`}
              alt='tilapia'
              width={150}
              height={150}
              className='object-fit-contain'
            />
            <Title
              title={dataTobaTolapia[0].headline}
              description={
                dataTobaTolapia
                  ? dataTobaTolapia[0].highlight
                  : t('toba-tilapia')
              }
              readMore={t('find-out-more')}
              onClick={() =>
                window.open(
                  dataTobaTolapia
                    ? dataTobaTolapia[0].url
                    : 'https://tobatilapia.com',
                )
              }
            />
          </Col>
          <Col md={6}>
            <Image
              alt='tilapia'
              className='img-right-food'
              src={`${dataTobaTolapia ? process.env.NEXT_PUBLIC_HOST_IMAGE + dataTobaTolapia[0].image.data[1].attributes.url : Tilapia}`}
              width={0}
              height={0}
              sizes='100vw'
            />
          </Col>
        </Row>
        <Row className='align-items-center position-relative py-5 my-5 my-md-0'>
          <Col md={6} className='img-left-food-container mt-5'>
            <Image
              alt='tilapia'
              className='img-left-food'
              src={`${dataSeafoodLovers ? process.env.NEXT_PUBLIC_HOST_IMAGE + dataSeafoodLovers[0].image.data[1].attributes.url : Shrimp}`}
              width={0}
              height={0}
              sizes='100vw'
            />
          </Col>
          <Col md={6} className='d-flex flex-column gap-3 left-text-food'>
            <Image
              alt='seafood-lover'
              src={`${dataSeafoodLovers ? process.env.NEXT_PUBLIC_HOST_IMAGE + dataSeafoodLovers[0].image.data[0].attributes.url : SeafoodLover}`}
              width={150}
              height={150}
              className='object-fit-contain'
            />
            <Title
              title={dataSeafoodLovers[0].headline}
              description={
                dataSeafoodLovers
                  ? dataSeafoodLovers[0].highlight
                  : t('seafood-lovers')
              }
              readMore={t('find-out-more')}
              onClick={() =>
                window.open(
                  dataSeafoodLovers
                    ? dataSeafoodLovers[0].url
                    : 'https://www.japfabest.com/collections/seafood',
                )
              }
            />
          </Col>
        </Row>
        <Row className='align-items-center position-relative py-5 mt-5 mt-md-0'>
          <Col md={6} className='d-flex flex-column gap-3'>
            <Image
              src={`${dataPrimeSeafood ? process.env.NEXT_PUBLIC_HOST_IMAGE + dataPrimeSeafood[0].image.data[0].attributes.url : PrimeSeafood}`}
              alt='tilapia'
              width={150}
              height={150}
              className='object-fit-contain'
            />
            <Title
              title={dataPrimeSeafood[0].headline}
              description={
                dataPrimeSeafood
                  ? dataPrimeSeafood[0].highlight
                  : t('prime-seafood')
              }
              readMore={t('find-out-more')}
              onClick={() =>
                window.open(
                  dataPrimeSeafood
                    ? dataPrimeSeafood[0].url
                    : 'https://www.japfacomfeed.co.id/japfa-prime-seafood',
                )
              }
            />
          </Col>
          <Col md={6}>
            <Image
              src={`${dataPrimeSeafood ? process.env.NEXT_PUBLIC_HOST_IMAGE + dataPrimeSeafood[0].image.data[1].attributes.url : Siomay}`}
              width={0}
              height={0}
              sizes='100vw'
              className='img-right-food'
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Products
