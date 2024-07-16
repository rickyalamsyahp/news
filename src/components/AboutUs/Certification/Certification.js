import { useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'
import BKIPM from '../../../assets/images/BKIPM.png'
import GMP from '../../../assets/images/GMP.png'
import HACCP from '../../../assets/images/HACCP.png'
import BRC from '../../../assets/images/BRC.png'
import BAP from '../../../assets/images/BAP.png'
import MUI from '../../../assets/images/MUI.png'
import OU from '../../../assets/images/OU.png'
import MENTRI from '../../../assets/images/MENTRI.png'
import WWF from '../../../assets/images/WWF.png'
import Image from 'next/image'

function Certification() {
  const t = useTranslations('about-us.certification')
  const certifications1 = [BKIPM, GMP, HACCP, BRC, BAP]
  const certifications2 = [MUI, OU, MENTRI, WWF]
  return (
    <section className='bg-white py-3 py-md-5 position-relative'>
      <Container className='py-3 py-md-5'>
        <Row>
          <Col xs={12}>
            <h2 className='fw-bold pb-4 text-center'>{t('title')}</h2>
            <h4 className='text-center'>{t('description')}</h4>
          </Col>
        </Row>
        <Row className='justify-content-center pt-4'>
          {certifications1.map((data, index) => (
            <Col md='auto' key={`certificate-${index}`}>
              <Image src={data} alt={`certificate-${index}`} />
            </Col>
          ))}
        </Row>
        <Row className='justify-content-center pt-4'>
          {certifications2.map((data, index) => (
            <Col md='auto' key={`certificate-${index}`}>
              <Image src={data} alt={`certificate-${index}`} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Certification
