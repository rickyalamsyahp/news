import { Col, Container, Row } from 'react-bootstrap'
import SectionAnimaHealth2 from '../../../assets/images/section-1-technical-team-2.jpg'
import SectionAnimaHealth3 from '../../../assets/images/section-1-technical-team-3.jpg'
import SectionTechnicalTeam1 from '../../../assets/images/section-2-technical-team.jpg'
import SectionTechnicalTeam2 from '../../../assets/images/section-2-technical-team-2.jpg'
import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'
import { Link } from '../../../navigation'
import CardEffectCarousel from '../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

function TechnicalTeam() {
  const t = useTranslations('technical-team')
  const dataAnimalHealth = [
    { src: SectionAnimaHealth2 },
    { src: SectionAnimaHealth3 },
  ]
  const dataTechnicalTeam = [
    { src: SectionTechnicalTeam1 },
    { src: SectionTechnicalTeam2 },
  ]
  return (
    <>
      <section
        className='bg-white mt-0 mt-md-5 overflow-hidden'
        id='animal-health'
      >
        <Container className='py-0 py-md-5'>
          <Row className='py-5 align-items-center'>
            <Col xs={12} md={6}>
              <h2 className='pb-3 fw-bold'>{t('section1.title')}</h2>
              <h5 className='d-none d-md-flex'>{t('section1.description')}</h5>
            </Col>
            <Col md={6}>
              <CardEffectCarousel
                cardWidth={450}
                dataCarousel={dataAnimalHealth}
              />
            </Col>
            <Col xs={12} className='d-flex d-md-none pt-3 '>
              <h5>{t('section1.description')}</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='mt-0 mt-md-5 overflow-hidden' id='shrimp-fish-tech'>
        <Container className='py-0 py-md-5'>
          <Row className='py-5 align-items-center position-relative'>
            <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 6 }}>
              <CardEffectCarousel
                cardWidth={450}
                dataCarousel={dataTechnicalTeam}
              />
            </Col>
            <Col xs={{ order: 1, span: 12 }} md={6}>
              <h2 className='pb-3 fw-bold'>{t('section2.title')}</h2>
              <h5 className='d-none d-md-flex'>{t('section2.description')}</h5>
            </Col>
            <Col xs={{ order: 3, span: 12 }} className='d-flex d-md-none pt-3 '>
              <h5>{t('section2.description')}</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='bg-blue p-0 p-md-5'>
        <Container>
          <div className='py-4'>
            <Reveal overflow={true}>
              <h3 className='text-white mb-3 mb-md-5'>{t('join-us')}</h3>
            </Reveal>
            <Reveal overflow={true}>
              <ButtonThird>
                <Link href='/contact-us'>{t('contact-us')}</Link>
              </ButtonThird>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}

export default TechnicalTeam
