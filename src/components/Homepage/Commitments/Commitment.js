import { Container } from 'react-bootstrap'
import DescriptionCommitments from './DescriptionCommitments/DescriptionCommitments'
import CountCommitments from './CountCommitments/CountCommitments'
import CarouselHomepage from '../../GeneralComponent/Carousel/Carousel'
import Thumbnail from './Thumbnail/Thumbnail'

export default function Commitment({
  dataCommitments,
  dataPortofolio,
  pagesArticle,
}) {
  const headline = dataCommitments && dataCommitments[0].headline
  const highlight = dataCommitments && dataCommitments[0].highlight
  const dataPorto = dataPortofolio && dataPortofolio[0]
  const pagesArti = pagesArticle && pagesArticle.data.data

  return (
    <section className='py-4 py-md-5 overflow-hidden' id='commitments-homepage'>
      <Container>
        {/* <Thumbnail /> */}
        <DescriptionCommitments headline={headline} highlight={highlight} />
        <CountCommitments dataPortofolio={dataPorto} />
      </Container>
      <CarouselHomepage pagesArti={pagesArti} />
    </section>
  )
}
