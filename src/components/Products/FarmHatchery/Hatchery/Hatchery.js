import { Col, Container, Row } from 'react-bootstrap'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import HatcheryShrimp from '../../../../assets/images/hatchery-shrimp.jpg'
import HatcheryFish from '../../../../assets/images/hatchery-fish.jpg'

function VisionMission() {
  const t = useTranslations('hatchery-farm')
  return (
    <section className='pt-5 pb-5 bg-secondary-subtle'>
      <Container>
        <h2 className='text-center mb-5'>
          STP Hatchery
          <br /> {t('hatchery.title')}
        </h2>
        <Row className='card-hatchery-farm bg-white mb-3 mb-md-0'>
          <Col md={{ span: 6, order: '2' }} className='p-0 position-relative'>
            <Image alt='hatchery-shrimp-image' src={HatcheryShrimp} />
          </Col>
          <Col md={{ span: 6, order: '1' }} className='py-5 px-5'>
            <div className='py-4 card-title gap-5 d-flex flex-column'>
              <h3>{t('hatchery.shrimp.title')}</h3>
              <h5>{t('hatchery.shrimp.description1')}</h5>
              <h5>{t('hatchery.shrimp.description2')}</h5>
            </div>
          </Col>
        </Row>
        <Row className='card-hatchery-farm bg-white'>
          <Col md={{ span: 5, order: '1' }} className='p-0 position-relative'>
            <Image alt='hatchery-fish-image' src={HatcheryFish} />
          </Col>
          <Col md={{ span: 6, order: '2' }}>
            <Row className='flex-column h-100 justify-content-between align-items-center'>
              <Col md={12} className='py-5 px-4'>
                <div className='py-4 card-title gap-5 d-flex flex-column'>
                  <h3>{t('hatchery.fish.title')}</h3>
                  <h5>{t('hatchery.fish.description1')}</h5>
                  <h5>{t('hatchery.fish.description2')}</h5>
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
