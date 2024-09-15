import { useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'
import Guarantee from '../../../../assets/svg/guarantee.svg'
import Free from '../../../../assets/svg/free.svg'
import Growth from '../../../../assets/svg/growth.svg'
import BGFish from '../../../../assets/images/bg-fish.png'
import Image from 'next/image'

function Commitment({ dataCommitment }) {
  const dataImage = [Guarantee, Free, Growth]

  const t = useTranslations('hatchery-farm.commitment')
  return (
    <section className='bg-white commitment-section'>
      <Container>
        <h2 className='text-center pb-3 pt-5'>
          {dataCommitment.length > 0 ? dataCommitment[0].headline : ''}
        </h2>
        <h4 className='text-center pb-5'>
          {dataCommitment.length > 0 ? dataCommitment[0].highlight : ''}
        </h4>
        {dataCommitment.length > 0 &&
          dataCommitment.splice(1, 3).map((res, index) => (
            <Row
              className='justify-content-center align-items-center'
              key={res.id}
            >
              <Col xs={3} lg={2} className='me-3 me-sm-0'>
                {dataImage[index]()}
              </Col>
              <Col xs={5}>
                <h4>{res.headline}</h4>
              </Col>
            </Row>
          ))}
        {/* <Row className='justify-content-center align-items-center'>
          <Col xs={3} lg={2}>
            <Free />
          </Col>
          <Col xs={5}>
            <h4>{t('note2')}</h4>
          </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col xs={3} lg={2}>
            <Growth />
          </Col>
          <Col xs={5}>
            <h4>{t('note3')}</h4>
          </Col>
        </Row> */}
      </Container>
      <Image alt='bg-fish' src={BGFish} className='w-100 h-auto' />
    </section>
  )
}

export default Commitment
