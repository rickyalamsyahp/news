import { Container, Row } from 'react-bootstrap'
import MappingCardSolutions from '../../../Homepage/TotalSolutions/MappingCardSolutions/MappingCardSolutions'

function TotalSolutions({dataSolutionsCard}) {
  return (
    <section className='bg-light py-2 py-md-5' id='total-solution-homepage'>
      <Container>
        <Row className='py-4 flex-column'>
          <h2 className='text-center fw-bold pb-3'>Our Total Solutions</h2>
          <MappingCardSolutions dataSolutionsCard={dataSolutionsCard}/>
        </Row>
      </Container>
    </section>
  )
}

export default TotalSolutions
