import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardSolutions from '../../../GeneralComponent/CardSolutions/CardSolutions'
import { useTranslations } from 'next-intl'

export default function MappingCardSolutions({ dataOurProduct }) {
  const t = useTranslations('homepage.total-solutions.card')
  const cardOurProductApi = dataOurProduct.map((data, index) => ({
    text: data.attributes.title,
    image: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes.image.data.attributes.url}`,
    link: `${data.attributes.url}`,
    delay: index > 3 ? (index - 4) * 0.5 : index * 0.5,
  }))
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
  ]
  const cardMappingData = cardOurProductApi ? cardOurProductApi : cardSolutions

  return (
    <Col>
      <Row className='justify-content-center g-xl-4 gy-4 gx-2 gy-xl-1'>
        {cardMappingData.map((data, index) => (
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
