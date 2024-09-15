import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import EmpoweringImage from '../../../assets/images/empowering.jpg'
import EmpoweringImage2 from '../../../assets/images/empowering-2.jpg'
import EmpoweringImage3 from '../../../assets/images/empowering-3.jpg'
import EmpoweringImage4 from '../../../assets/images/empowering-4.jpg'
import Carousel from '../../GeneralComponent/Carousel/Carousel'
import Reveal from '../../Animation/Reveal/Reveal'
import CardEffectCarousel from '../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

export default function Empowering({ dataEmpowering, pagesArticle }) {
  const pagesArti = pagesArticle && pagesArticle.data.data
  const dataEmpoweringCarouselApi = dataEmpowering
    ? dataEmpowering[0].image.data.map((data, index) => ({
        src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes.url}`,
      }))
    : []
  const t = useTranslations('commitments.empowering')
  var paragraphs = dataEmpowering[0]?.highlight.split(/(?:\r?\n)+/)
  const dataEmpoweringCarousel = [
    { src: EmpoweringImage2 },
    { src: EmpoweringImage3 },
    { src: EmpoweringImage4 },
    { src: EmpoweringImage },
  ]
  return (
    <section className='py-3 py-md-5 bg-light overflow-hidden'>
      <Container className='pb-3 pb-md-5'>
        <Row className='h-100 justify-content-between align-items-center'>
          <Col md={7}>
            <Reveal overflow={true} direction={'top'}>
              <CardEffectCarousel dataCarousel={dataEmpoweringCarouselApi} />
            </Reveal>
          </Col>
          <Col md={5}>
            <Reveal direction={'right'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column'>
                <Title
                  description={
                    dataEmpowering ? paragraphs[0] : t('description1')
                  }
                  title={
                    dataEmpowering ? dataEmpowering[0]?.headline : t('title')
                  }
                />
                <Title
                  description={
                    dataEmpowering ? paragraphs[1] : t('description2')
                  }
                />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
      <Carousel pagesArti={pagesArti} />
    </section>
  )
}
