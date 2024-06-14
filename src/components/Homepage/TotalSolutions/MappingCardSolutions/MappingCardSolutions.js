import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardSolutions from '../../../GeneralComponent/CardSolutions/CardSolutions'
import { useTranslations } from 'next-intl'

export default function MappingCardSolutions() {
  const t = useTranslations('homepage.total-solutions.card')
  const cardSolutions = [
    {
      text: t('aquafeed'),
      image: 'aquafeed',
      link: '#',
    },
    {
      text: t('hatchery'),
      image: 'hatchery',
      link: '#',
    },
    {
      text: t('farm'),
      image: 'farm',
      link: '#',
    },
    {
      text: t('seafood-processing'),
      image: 'seafood-processing',
      link: '#',
    },
    {
      text: t('animal-health'),
      image: 'animal-health',
      link: '#',
    },
    {
      text: t('technical-team'),
      image: 'technical-team',
      link: '#',
    },
    {
      text: t('innovations'),
      image: 'innovations',
      link: '#',
    },
  ]
  return (
    <Col className='pt-4'>
      <Row className='justify-content-center gap-md-3 gap-5 gy-2'>
        {cardSolutions.map((data, index) => (
          <Col
            key={`card-solutions-${data.text}-${index}`}
            style={{ width: '320px' }}
            sm={6}
            md={3}
          >
            <CardSolutions text={data.text} image={data.image} />
          </Col>
        ))}
      </Row>
    </Col>
  )
}
