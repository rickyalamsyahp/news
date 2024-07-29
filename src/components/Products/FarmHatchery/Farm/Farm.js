import { Col, Container, Row } from 'react-bootstrap'
import { useTranslations } from 'next-intl'
import FarmingShrimp from '../../../../assets/images/farming-shrimp.jpg'
import FarmingShrimp2 from '../../../../assets/images/farming-shrimp-2.jpg'
import FarmingShrimp3 from '../../../../assets/images/farming-shrimp-3.jpg'
import FarmingShrimp4 from '../../../../assets/images/farming-shrimp-4.jpg'
import FarmingFish from '../../../../assets/images/farming-fish.jpg'
import FarmingFish2 from '../../../../assets/images/farming-fish-2.jpg'
import FarmingFish3 from '../../../../assets/images/farming-fish-3.jpg'
import CardEffectCarousel from '../../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

function VisionMission() {
  const t = useTranslations('hatchery-farm')
  const dataFish = [
    { src: FarmingFish },
    { src: FarmingFish2 },
    { src: FarmingFish3 },
  ]
  const dataShrimp = [
    { src: FarmingShrimp },
    { src: FarmingShrimp2 },
    { src: FarmingShrimp3 },
    { src: FarmingShrimp4 },
  ]
  return (
    <section className='pt-5 pb-5 bg-light-subtle' id='farm'>
      <Container>
        <h2 className='text-center my-5'>
          STP Farming
          <br /> {t('farm.title')}
        </h2>
        <Row className='card-hatchery-farm bg-white mb-3 mb-md-0'>
          <Col md={{ span: 6, order: '2' }} className='p-0 position-relative'>
            <CardEffectCarousel dataCarousel={dataFish} cardWidth={450} />
          </Col>
          <Col md={{ span: 6, order: '1' }} className='py-5 px-5'>
            <div className='py-4 card-title gap-5 d-flex flex-column'>
              <h3>{t('farm.fish.title')}</h3>
              <h5>{t('farm.fish.description')}</h5>
            </div>
          </Col>
        </Row>
        <Row className='card-hatchery-farm bg-white'>
          <Col md={{ span: 5, order: '1' }} className='p-0 position-relative'>
            <CardEffectCarousel dataCarousel={dataShrimp} cardWidth={400} />
          </Col>
          <Col md={{ span: 6, order: '2' }}>
            <Row className='flex-column h-100 justify-content-between align-items-center'>
              <Col md={12} className='py-5 px-4'>
                <div className='py-4 card-title gap-5 d-flex flex-column'>
                  <h3>{t('farm.shrimp.title')}</h3>
                  <h5>{t('farm.shrimp.description')}</h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VisionMission
