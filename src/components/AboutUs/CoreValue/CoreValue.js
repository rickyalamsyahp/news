'use client'

import { useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'
import { CardValue } from './CardValue/CardValue'
import { useState } from 'react'

function CoreValue({ dataOurValues, value }) {
 
  const [active, setActive] = useState(0)
  const [transition, setTransition] = useState(false)
  const t = useTranslations('about-us.values')
  const cardValuess = value.map((datas) =>({
    title: datas.attributes.title,
    description: datas.attributes.content,
    logo: datas.attributes.icon?.data?.attributes?.url 
    ? `${process.env.NEXT_PUBLIC_HOST_IMAGE}${datas.attributes.icon.data.attributes.url}` 
    : '',
    image: datas.attributes.image?.data?.attributes?.url 
    ? `${process.env.NEXT_PUBLIC_HOST_IMAGE}${datas.attributes.image.data.attributes.url}` 
    : '',
  }))

  
  return (
    <section className='py-5'>
      <Container>
        <Row>
          <Col>
            <h3 className='fw-bold pb-3'>{t('title')}</h3>
            <h4 className='pb-3'>
              {dataOurValues ? dataOurValues[0]?.highlight : t('description')}
            </h4>
          </Col>
          <Col className='d-flex flex-row justify-content-between align-items-center pt-5'>
            {cardValuess.map((data, index) => (
              <CardValue
                key={`card-value-${index}`}
                data={data}
                index={index}
                active={active}
                setActive={setActive}
                setTransition={setTransition}
              />
            ))}
          </Col>
          <Col>
            <h5
              className={`pt-3 pt-md-5 card-value-description ${transition ? 'active' : ''}`}
            >
              {cardValuess[active].description}
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CoreValue
