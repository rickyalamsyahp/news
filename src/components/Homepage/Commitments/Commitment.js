import { Container } from 'react-bootstrap'
import Thumbnail from './Thumbnail/Thumbnail'
import DescriptionCommitments from './DescriptionCommitments/DescriptionCommitments'
import CountCommitments from './CountCommitments/CountCommitments'
import CarouselHomepage from '../../GeneralComponent/Carousel/Carousel'

export default function Commitment() {
  return (
    <section className='py-4 py-md-5 overflow-hidden' id='commitments-homepage'>
      <Container>
        {/* <Thumbnail /> */}
        <DescriptionCommitments />
        <CountCommitments />
      </Container>
      <CarouselHomepage />
    </section>
  )
}
