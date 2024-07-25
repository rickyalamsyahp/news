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
      link: '/aquafeed',
      delay: 0,
    },
    {
      text: t('hatchery'),
      image: 'hatchery',
      link: '/hatchery-farm#hatchery',
      delay: 0.5,
    },
    {
      text: t('farm'),
      image: 'farm',
      link: '/hatchery-farm#farm',
      delay: 1,
    },
    {
      text: t('seafood-processing'),
      image: 'seafood-processing',
      link: '/seafood-processing',
      delay: 1.5,
    },
    {
      text: t('animal-health'),
      image: 'animal-health',
      link: '#',
      delay: 0,
    },
    {
      text: t('technical-team'),
      image: 'technical-team',
      link: '/technical-team',
      delay: 0.5,
    },
    {
      text: t('innovations'),
      image: 'innovations',
      link: '/innovations',
      delay: 1,
    },
  ]
  return (
    <Col className='pt-4'>
      <Row className='justify-content-center g-xl-4 gy-4 gx-2 gy-xl-1'>
        {cardSolutions.map((data, index) => (
          <Col
            xs={6}
            md='auto'
            xl={3}
            key={`card-solutions-${data.text}-${index}`}
          >
            <CardSolutions
              text={data.text}
              image={data.image}
              delay={data.delay}
              link={data.link}
            />
          </Col>
        ))}
      </Row>
    </Col>
  )
}
