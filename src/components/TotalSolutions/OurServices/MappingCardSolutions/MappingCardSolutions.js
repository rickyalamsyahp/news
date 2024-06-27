import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardSolutions from '../../../GeneralComponent/CardSolutions/CardSolutions'
import { useTranslations } from 'next-intl'
import Reveal from '../../../Animation/Reveal/Reveal'

export default function MappingCardSolutions() {
  const t = useTranslations('homepage.total-solutions.card')
  const cardSolutions = [
    {
      text: t('animal-health'),
      image: 'animal-health',
      link: '#',
      delay: 0,
    },
    {
      text: t('technical-team'),
      image: 'technical-team',
      link: '#',
      delay: 0.5,
    },
  ]
  return (
    <Col>
      <Row className='justify-content-center g-xl-4 gy-4 gx-2 gy-xl-1'>
        {cardSolutions.map((data, index) => (
          <Col key={`card-solutions-${data.text}-${index}`} xs={6} md='auto'>
            <Reveal delay={data.delay}>
              <CardSolutions text={data.text} image={data.image} />
            </Reveal>
          </Col>
        ))}
      </Row>
    </Col>
  )
}
