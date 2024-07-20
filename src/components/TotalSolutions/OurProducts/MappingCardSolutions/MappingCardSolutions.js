import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardSolutions from '../../../GeneralComponent/CardSolutions/CardSolutions'
import { useTranslations } from 'next-intl'

export default function MappingCardSolutions() {
  const t = useTranslations('homepage.total-solutions.card')
  const cardSolutions = [
    {
      text: t('aquafeed'),
      image: 'aquafeed-new',
      link: '/aquafeed',
      delay: 0,
    },
    {
      text: t('hatchery'),
      image: 'hatchery-new',
      link: '/hatchery-farm',
      delay: 0.5,
    },
    {
      text: t('farm'),
      image: 'farm-new',
      link: '#',
      delay: 1,
    },
    {
      text: t('seafood-processing'),
      image: 'seafood-processing-new',
      link: '/seafood-processing',
      delay: 1.5,
    },
  ]
  return (
    <Col>
      <Row className='justify-content-center g-xl-4 gy-4 gx-2 gy-xl-1'>
        {cardSolutions.map((data, index) => (
          <Col
            key={`card-solutions-${data.text}-${index}`}
            xs={6}
            md='auto'
            xl={3}
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
