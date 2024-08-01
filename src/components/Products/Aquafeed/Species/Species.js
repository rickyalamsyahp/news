'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { useRouter } from '../../../../navigation'

function Species() {
  const t = useTranslations('aquafeed.species')
  const router = useRouter()
  const dataAquafeed = [
    {
      text: 'Tilapia',
      image: 'tilapia',
    },
    {
      text: 'Milk Fish',
      image: 'milk-fish',
    },
    {
      text: 'Common Carp',
      image: 'common-carp',
    },
    {
      text: 'Clarias Catfish',
      image: 'clarias-catfish',
    },
    {
      text: 'Pangasius Catfish',
      image: 'pangasius-catfish',
    },
    {
      text: 'Grouper',
      image: 'grouper',
    },
    {
      text: 'Barramundi',
      image: 'species1',
    },
    {
      text: 'Species 2',
      image: 'species2',
    },
    {
      text: 'Litopenauses Vannamei',
      image: 'species3',
    },
    {
      text: 'Eel',
      image: 'species4',
    },
    {
      text: 'Species 5',
      image: 'species5',
    },
  ]
  return (
    <section className='bg-primary-subtle pb-5'>
      <Container>
        <h1 className='fw-bold py-5'>{t('title')}</h1>
        <h4>{t('description')}</h4>
        <Row className='justify-content-center justify-content-lg-start pb-5'>
          {dataAquafeed.map((res, index) => (
            <Col
              key={`species-${index}`}
              xs={4}
              md='auto'
              lg={4}
              xl={3}
              className='gy-4'
            >
              <div
                className='card-species'
                onClick={() => router.push('item-product')}
              >
                <Image
                  src={`/${res.image}.png`}
                  alt={res.image}
                  fill
                  className='image-species'
                />
              </div>
              <h4 className='text-center fw-bold'>{res.text}</h4>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Species
