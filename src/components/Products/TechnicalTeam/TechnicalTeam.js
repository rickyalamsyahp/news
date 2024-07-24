import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Section1 from '../../../assets/images/section-1-technical-team.jpg'
import Section2 from '../../../assets/images/section-2-technical-team.jpg'
import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'
import { Link } from '../../../navigation'

function TechnicalTeam() {
  const t = useTranslations('technical-team')
  return (
    <>
      <section className='bg-white mt-5 overflow-hidden'>
        <Container className='py-5'>
          <Row className='py-5 align-items-center'>
            <Col md={6}>
              <h2 className='pb-3'>{t('section1.title')}</h2>
              <h5>{t('section1.description')}</h5>
            </Col>
            <Col md={6}>
              <Image alt='section-1-technical-team' src={Section1} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='mt-5 overflow-hidden position-relative'>
        <Container className='py-5'>
          <Row className='py-5 align-items-center'>
            <Col md={6}>
              <Image
                alt='section-2-technical-team'
                src={Section2}
                className='position-relative'
                style={{
                  left: '-130%',
                }}
              />
            </Col>
            <Col md={6}>
              <h2 className='pb-3'>{t('section2.title')}</h2>
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
