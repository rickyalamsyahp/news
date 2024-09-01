import { useTranslations } from 'next-intl';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Reveal from '../../../Animation/Reveal/Reveal';

function Reasons({ dataReasons }) {
  const t = useTranslations('aquafeed.reasons');

  // Modify data to match the desired output structure
  const modifiedDataReasons = dataReasons?.map((res, index) => ({
    description: res.headline,
    image: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res.image.data[0].attributes.url}`,
  })) || [];

  return (
    <section className='bg-body-secondary py-5'>
      <Container>
        <h2 className='fw-bold text-center mb-4'>{t('title')}</h2>
        <Row className='justify-content-center justify-content-lg-start pb-5'>
          {modifiedDataReasons.length > 0 && modifiedDataReasons.map((res, index) => (
                 <Col
                 xs={5}
                 md='auto'
                 lg={6}
                 xl={4}
                 className='gy-4'
                  >
            <Reveal direction='bottom' overflow={true} key={`reason-${index}`}>
         
                <Image
                  alt={res.description}
                  src={res.image}
                  width={60}
                  height={60}
                  className='mb-2'
                />
                <h4 className='fw-semibold'>{res.description}</h4>
           
            </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Reasons;
