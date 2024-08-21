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

  const t = useTranslations('commitments.empowering')
  const dataEmpoweringCarousel = [
    { src: EmpoweringImage2 },
    { src: EmpoweringImage3 },
    { src: EmpoweringImage4 },
    { src: EmpoweringImage },
  ]
  return (
    <section className='py-3 py-md-5 bg-light overflow-hidden'>
      <Container className='pb-3 pb-md-5'>
        <Row className='align-items-center h-100 gap-3 gap-md-5 justify-content-between'>
          <Col md={5}>
            <Reveal overflow={true} direction={'top'}>
              <CardEffectCarousel
                dataCarousel={dataEmpoweringCarousel}
                cardWidth={350}
              />
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal direction={'right'} overflow={true}>
              <div className='d-flex gap-3 gap-md-5 flex-column mt-3 mt-md-5'>
                <Title
                  description={
                    dataEmpowering
                      ? dataEmpowering[0]?.highlight
                      : t('description1')
                  }
                  title={
                    dataEmpowering ? dataEmpowering[0]?.headline : t('title')
                  }
                />
                {/* <Title description={t('description2')} /> */}
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
      <Carousel pagesArti={pagesArti} />
    </section>
  )
}
