import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import IntroductionImage from '../../../assets/images/intro-about-us.png'

export default function Introduction() {
  const t = useTranslations('about-us')
  return (
    <section className='py-4 py-lg-5'>
      <Container className='py-0 py-lg-5'>
        <Row className='text-center pb-3 pb-lg-5'>
          <Col>
            <Reveal overflow={true}>
              <h4 className='text-secondary'>{t('introduction')}</h4>
            </Reveal>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <Reveal overflow={true}>
              <Image
                alt='image-introduction-about-us'
                src={IntroductionImage}
                className='img-innovation'
              />
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
