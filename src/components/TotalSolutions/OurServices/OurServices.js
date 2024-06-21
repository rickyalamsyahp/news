import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Description from './Description/Description'
import MappingCardSolutions from './MappingCardSolutions/MappingCardSolutions'

function OurServices() {
  return (
    <section className='bg-light py-2 py-sm-5'>
      <Container>
        <Row className='justify-content-md-center align-items-center h-100 text-center py-2 py-sm-5'>
          <Description />
        </Row>
        <Row className='pt-2 pt-sm-4 pb-3 pt-sm-5'>
          <MappingCardSolutions />
        </Row>
      </Container>
    </section>
  )
}

export default OurServices
