'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { useRouter } from '../../../../navigation'
import Reveal from '../../../Animation/Reveal/Reveal'

function Species({ dataSpecies }) {
  const t = useTranslations('aquafeed.species')
  const router = useRouter()
  const modifiedDataSpecies = dataSpecies.map((species, index) => ({
    ...species,
    text: species.attributes.name,
    slug: species.attributes.slug,
    image: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${species.attributes.image.data.attributes.url}`,
  }))
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
        <Reveal direction='top' overflow={true}>
          <h1 className='fw-bold py-5'>{t('title')}</h1>
        </Reveal>
        <Reveal direction='top' overflow={true}>
          <h4>{t('description')}</h4>
        </Reveal>
        <Row className='justify-content-center justify-content-lg-start pb-5'>
          {modifiedDataSpecies.map((res, index) => (
            <Col
              key={`species-${index}`}
              xs={4}
              md='auto'
              lg={4}
              xl={3}
              className='gy-4'
            >
              <Reveal delay={index / 4} direction='left' overflow={true}>
                <div
                  className='card-species'
                  onClick={() => router.push(`item-product/${res.slug}`)}
                >
                  <Image
                    src={res.image}
                    alt={res.image}
                    fill
                    className='image-species'
                  />
                </div>
              </Reveal>
              <h4 className='text-center fw-bold'>{res.text}</h4>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Species
