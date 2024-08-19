import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Description from './Description/Description'
import MappingCardSolutions from './MappingCardSolutions/MappingCardSolutions'

function OurProducts({ dataProduct }) {
  const highlight = dataProduct[0]?.highlight || undefined

  return (
    <section className='py-2 py-sm-5'>
      <Container>
        <Row className='text-center py-2 py-sm-5'>
          <Description highlight={highlight} />
        </Row>
        <Row className='pt-3 pt-sm-4 pb-4 pb-sm-5'>
          <MappingCardSolutions />
        </Row>
      </Container>
    </section>
  )
}

export default OurProducts
