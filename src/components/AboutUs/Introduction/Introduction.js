import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'
import { Col, Container, Row } from 'react-bootstrap'
// import Image from 'next/image'
import IntroductionImage from '../../../assets/images/intro-about-us.png'

const Image = dynamic(() => import('next/image'), { ssr: false });

export default function Introduction({ dataIntro }) {
  const t = useTranslations('about-us')
  console.log(dataIntro[0]?.image.data[0]);
  
  return (
    <section className='py-4 py-lg-5' id='introduction'>
      <Container className='py-0 py-lg-5'>
        <Row className='text-center pb-3 pb-lg-5'>
          <Col>
            <Reveal overflow={true}>
              <h3 className='text-secondary'>
                {dataIntro ? dataIntro[0]?.highlight :''}
              </h3>
            </Reveal>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <Reveal overflow={true}>
              <Image
                alt='image-introduction-about-us'
                src={
                  dataIntro && dataIntro[0]?.image.data.length>0 
                    ? `${process.env.NEXT_PUBLIC_HOST_IMAGE}${dataIntro[0]?.image?.data[0].attributes.url}`
                    : ''
                }
                width={1000}
                height={1000}
                className='img-innovation'
              />
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
