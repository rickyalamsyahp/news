import { useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Reveal from '../../../Animation/Reveal/Reveal'
import BGAquafeed2 from '../../../../assets/images/bg-aquafeed-2.png'

function Reasons({ dataReasons }) {
  const t = useTranslations('aquafeed.reasons')

  // Modify data to match the desired output structure
  const modifiedDataReasons =
    dataReasons?.map((res, index) => ({
      description: res.headline,
      image: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res.image.data[0].attributes.url}`,
    })) || []

  return (
    <section className='bg-body-secondary py-5 position-relative'>
      <Container>
        <h2 className='fw-bold text-center mb-4'>{t('title')}</h2>
        <Row className='justify-content-center pb-5'>
          {modifiedDataReasons.length > 0 &&
            modifiedDataReasons.map((res, index) => (
              <Col
                xs={12} // Full width on extra small screens
                sm={6} // Half width on small screens
                md={4} // One-third width on medium screens
                lg={4} // Quarter width on large screens
                className='gy-5 text-center' // Center text and content
                key={`reason-${index}`} // Provide a unique key for each column
              >
                <Reveal direction='bottom' overflow={true}>
                  <Image
                    alt={res.description}
                    src={res.image}
                    width={0}
                    height={75}
                    sizes='100vw'
                    className='w-100 object-fit-contain mb-2'
                  />
                  <h4 className='fw-semibold'>{res.description}</h4>
                </Reveal>
              </Col>
            ))}
        </Row>
      </Container>
      <Image
        src={BGAquafeed2}
        alt='bg-aquafeed2'
        className='w-25 h-auto d-none d-md-block position-absolute start-0 top-0'
      />
    </section>
  )
}

export default Reasons
