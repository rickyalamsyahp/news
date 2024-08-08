import { useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'
import Consistent from '../../../../assets/images/consistent.png'
import Efficient from '../../../../assets/images/eco-friendly.png'
import Unmatched from '../../../../assets/images/unmatched.png'
import LongLasting from '../../../../assets/images/long-last.png'
import CompleteNutrition from '../../../../assets/images/complete-nutrition.png'
import Image from 'next/image'
import Reveal from '../../../Animation/Reveal/Reveal'

function Reasons() {
  const t = useTranslations('aquafeed.reasons')
  const dataReasons = [
    {
      description: t('consistent'),
      image: Consistent,
    },
    {
      description: t('eco-friendly'),
      image: Efficient,
    },
    {
      description: t('unmatched'),
      image: Unmatched,
    },
    {
      description: t('long-last'),
      image: LongLasting,
    },
    {
      description: t('complete-nutrition'),
      image: CompleteNutrition,
    },
  ]
  return (
    <section className='bg-body-secondary py-5 position-relative'>
      <Container>
        <h2 className='fw-bold text-center'>{t('title')}</h2>
        <Row className='justify-content-center align-items-center gy-4'>
          {dataReasons.map((res, index) => (
            <Reveal direction='bottom' overflow={true} key={`reason-${index}`}>
              <Col
                xs={6}
                md={12}
                className='py-3 d-flex align-items-center flex-column gap-3'
              >
                <Image alt={res.description} src={res.image} />
                <h3>{res.description}</h3>
              </Col>
            </Reveal>
          ))}
        </Row>
      </Container>
      {/* <Image
        src={BGAquafeed2}
        alt='bg-aquafeed2'
        className='position-absolute start-0 top-0'
      /> */}
    </section>
  )
}

export default Reasons
