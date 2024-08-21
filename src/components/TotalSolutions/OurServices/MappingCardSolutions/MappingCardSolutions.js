import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardSolutions from '../../../GeneralComponent/CardSolutions/CardSolutions'
import { useTranslations } from 'next-intl'

export default function MappingCardSolutions({ dataOurService }) {
  const t = useTranslations('homepage.total-solutions.card')
  const cardOurServiceApi = dataOurService.map((data, index) => ({
    text: data.attributes.title,
    image: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes.image.data.attributes.url}`,
    link: `${data.attributes.url}`,
    delay: index > 3 ? (index - 4) * 0.5 : index * 0.5,
  }))
  const cardSolutions = [
    {
      text: t('animal-health'),
      image: 'animal-health',
      link: '/technical-team#animal-health',
      delay: 0,
    },
    {
      text: t('technical-team'),
      image: 'technical-team',
      link: '/technical-team#shrimp-fish-tech',
      delay: 0.5,
    },
  ]
  const cardMappingData = cardOurServiceApi ? cardOurServiceApi : cardSolutions

  return (
    <Col>
      <Row className='justify-content-center g-xl-4 gy-4 gx-2 gy-xl-1'>
        {cardMappingData.map((data, index) => (
          <Col key={`card-solutions-${data.text}-${index}`} xs={6} md='auto'>
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
