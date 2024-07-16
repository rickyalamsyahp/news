'use client'

import { useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'
import PurposefulLogo from '../../../assets/svg/purposeful.svg'
import ResponsibleLogo from '../../../assets/svg/responsible.svg'
import RelentlessLogo from '../../../assets/svg/relentless.svg'
import Purposeful from '../../../assets/images/purposeful.png'
import Responsible from '../../../assets/images/responsible.png'
import Relentless from '../../../assets/images/relentless.png'
import { CardValue } from './CardValue/CardValue'
import { useState } from 'react'

function CoreValue() {
  const [active, setActive] = useState(0)
  const [transition, setTransition] = useState(false)
  const t = useTranslations('about-us.values')
  const cardValues = [
    {
      title: t('carousel.purposeful.title'),
      description: t('carousel.purposeful.description'),
      logo: PurposefulLogo,
      image: Purposeful,
    },
    {
      title: t('carousel.responsible.title'),
      description: t('carousel.responsible.description'),
      logo: RelentlessLogo,
      image: Responsible,
    },
    {
      title: t('carousel.relentless.title'),
      description: t('carousel.relentless.description'),
      logo: ResponsibleLogo,
      image: Relentless,
    },
  ]

  return (
    <section className='py-5'>
      <Container>
        <Row>
          <Col>
            <h3 className='fw-bold pb-3'>{t('title')}</h3>
            <h4 className='pb-3'>{t('description')}</h4>
          </Col>
          <Col className='d-flex flex-row justify-content-between align-items-center'>
            {cardValues.map((data, index) => (
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
              {cardValues[active].description}
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CoreValue
