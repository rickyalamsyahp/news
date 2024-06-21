import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardSolutions from '../../../GeneralComponent/CardSolutions/CardSolutions'
import { useTranslations } from 'next-intl'

export default function MappingCardSolutions() {
  const t = useTranslations('homepage.total-solutions.card')
  const cardSolutions = [
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
  ]
  return (
    <Col>
      <Row className='justify-content-center g-xl-5 gy-5 gx-3 gy-xl-2'>
        {cardSolutions.map((data, index) => (
          <Col key={`card-solutions-${data.text}-${index}`} xs={6} sm>
            <CardSolutions text={data.text} image={data.image} />
          </Col>
        ))}
      </Row>
    </Col>
  )
}
