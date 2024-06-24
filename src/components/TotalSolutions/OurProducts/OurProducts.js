'use client'

import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Description from './Description/Description'
import MappingCardSolutions from './MappingCardSolutions/MappingCardSolutions'
import ScrollAnimation from 'react-animate-on-scroll'

function OurProducts() {
  return (
    <section className='py-2 py-sm-5'>
      <Container>
        <Row className='justify-content-md-center align-items-center h-100 text-center py-2 py-sm-5'>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <Description />
          </ScrollAnimation>
        </Row>
        <Row className='pt-3 pt-sm-4 pb-4 pb-sm-5'>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <MappingCardSolutions />
          </ScrollAnimation>
        </Row>
      </Container>
    </section>
  )
}

export default OurProducts
