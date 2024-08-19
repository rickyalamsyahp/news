import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Description from './Description/Description'
import MappingCardSolutions from './MappingCardSolutions/MappingCardSolutions'

function OurServices({ dataService }) {
  const highlight = dataService[0]?.highlight || undefined
  const headline = dataService[0]?.headline || undefined
  return (
    <section className='bg-light py-2 py-sm-5'>
      <Container>
        <Row className='text-center py-2 py-sm-5'>
          <Description highlight={highlight} headline={headline} />
        </Row>
        <Row className='pt-2 pt-sm-4 pb-3 pt-sm-5'>
          <MappingCardSolutions />
        </Row>
      </Container>
    </section>
  )
}

export default OurServices
