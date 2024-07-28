import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Tilapia from '../../../../assets/images/tilapia.png'
import TobaTilapia from '../../../../assets/images/toba-tilapia.png'
import Shrimp from '../../../../assets/images/shrimp.png'
import SeafoodLover from '../../../../assets/images/seafood-lover.png'
import Siomay from '../../../../assets/images/siomay.png'
import PrimeSeafood from '../../../../assets/images/prime-seafood.png'
import { useTranslations } from 'next-intl'
import { Title } from '../../../GeneralComponent/Title/Title'

function Products() {
  const t = useTranslations('seafood-processing')
  return (
    <section className='overflow-hidden section-seafood-processing'>
      <Container>
        <Row className='align-items-center position-relative pt-5 pt-md-0'>
          <Col md={6} className='d-flex flex-column gap-3'>
            <Image src={TobaTilapia} alt='tilapia' />
            <Title
              title={'Toba Tolapia'}
              description={t('toba-tilapia')}
              readMore={t('find-out-more')}
            />
          </Col>
          <Col md={6}>
            <Image src={Tilapia} alt='tilapia' className='img-right-food' />
          </Col>
        </Row>
        <Row className='align-items-center position-relative'>
          <Col md={6} className='img-left-food-container'>
            <Image src={Shrimp} alt='tilapia' className='img-left-food' />
          </Col>
          <Col md={6} className='d-flex flex-column gap-3 left-text-food'>
            <Image src={SeafoodLover} alt='seafood-lover' />
            <Title
              title={'Seafood Lovers'}
              description={t('seafood-lovers')}
              readMore={t('find-out-more')}
            />
          </Col>
        </Row>
        <Row className='align-items-center position-relative pt-5 pt-md-0'>
          <Col md={6} className='d-flex flex-column gap-3'>
            <Image src={PrimeSeafood} alt='prime-seafood' />
            <Title
              title={'JAPFA Prime Seafood'}
              description={t('prime-seafood')}
              readMore={t('find-out-more')}
            />
          </Col>
          <Col md={6}>
            <Image src={Siomay} alt='siomay' className='img-right-food' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Products
