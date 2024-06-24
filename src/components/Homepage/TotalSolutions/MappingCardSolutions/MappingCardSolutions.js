'use client'

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardSolutions from '../../../GeneralComponent/CardSolutions/CardSolutions'
import { useTranslations } from 'next-intl'
import ScrollAnimation from 'react-animate-on-scroll'

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
      <Row className='justify-content-center g-xl-5 gy-5 gx-3 gy-xl-2'>
        {cardSolutions.map((data, index) => (
          <Col xs={6} sm key={`card-solutions-${data.text}-${index}`}>
            <ScrollAnimation
              animateIn='fadeInUp'
              animateOnce={true}
              delay={index >= 4 ? index * 1000 - 3500 : index * 1000 - 1000}
            >
              <CardSolutions text={data.text} image={data.image} />
            </ScrollAnimation>
          </Col>
        ))}
      </Row>
    </Col>
  )
}
