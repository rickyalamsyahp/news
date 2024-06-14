import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Description from './Description/Description'
import MappingCardSolutions from './MappingCardSolutions/MappingCardSolutions'

function OurProducts() {
  return (
    <section className='py-5'>
      <Container>
        <Row className='justify-content-md-center align-items-center h-100 text-center py-5'>
          <Description />
        </Row>
        <Row className='pt-4 pb-5'>
          <MappingCardSolutions />
        </Row>
      </Container>
    </section>
  )
}

export default OurProducts
