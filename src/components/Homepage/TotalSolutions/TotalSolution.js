import React from 'react'
import { Container, Row } from 'react-bootstrap'
import MappingCardSolutions from './MappingCardSolutions/MappingCardSolutions'
import { TitleTotalSolutions } from './TitleTotalSolutions/TitleTotalSolutions'

function TotalSolutions({ dataSolutions }) {
  const headline = dataSolutions && dataSolutions[0].headline

  return (
    <section className='bg-light py-2 py-md-5' id='total-solution-homepage'>
      <Container>
        <Row className='py-4 flex-column'>
          <TitleTotalSolutions headline={headline} />

          <MappingCardSolutions />
        </Row>
      </Container>
    </section>
  )
}

export default TotalSolutions
