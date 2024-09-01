import { Col, Container, Row } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import Reveal from '../../Animation/Reveal/Reveal';
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton';
import { Link } from '../../../navigation';
import CardEffectCarousel from '../../GeneralComponent/CardEffectCarousel/CardEffectCarousel';

function TechnicalTeam({ dataTechnicalTeam, dataAnimalHealth }) {
  const t = useTranslations('technical-team');
  const modifiedDataTechnicalTeam = dataTechnicalTeam[0]?.attributes?.content[0] || {};
  const modifiedDataAnimalHealth = dataAnimalHealth[0]?.attributes?.content[1] || {};

  const dataImageTechnicalTeam = modifiedDataTechnicalTeam.image?.data?.map(
    res => ({
      src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res.attributes.url}`,
    })
  ) || []; // Use empty array as fallback

  const dataImageAnimalHealth = modifiedDataAnimalHealth.image?.data?.map(
    res => ({
      src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res.attributes.url}`,
    })
  ) || []; // Use empty array as fallback

  return (
    <>
      <section className='bg-white mt-0 mt-md-5 overflow-hidden' id='animal-health'>
        <Container className='py-0 py-md-5'>
          <Row className='py-5 align-items-center justify-content-between'>
            <Col xs={12} md={5}>
              <h2 className='pb-3 fw-bold'>
                {modifiedDataAnimalHealth.headline || t('section1.title')}
              </h2>
              <h5 className='d-none d-md-flex'>{t('section1.description')}</h5>
            </Col>
            <Col md={5}>
              <CardEffectCarousel dataCarousel={dataImageAnimalHealth} />
            </Col>
            <Col xs={12} className='d-flex d-md-none pt-3 '>
              <h5>
                {modifiedDataAnimalHealth.highlight || t('section1.description')}
              </h5>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='mt-0 mt-md-5 overflow-hidden' id='shrimp-fish-tech'>
        <Container className='py-0 py-md-5'>
          <Row className='py-5 align-items-center position-relative justify-content-between'>
            <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 5 }}>
              <CardEffectCarousel dataCarousel={dataImageTechnicalTeam} />
            </Col>
            <Col xs={{ order: 1, span: 12 }} md={5}>
              <h2 className='pb-3 fw-bold'>
                {modifiedDataTechnicalTeam.headline || t('section2.title')}
              </h2>
              <h5 className='d-none d-md-flex'>{t('section2.description')}</h5>
            </Col>
            <Col xs={{ order: 3, span: 12 }} className='d-flex d-md-none pt-3 '>
              <h5>
                {modifiedDataTechnicalTeam.highlight || t('section2.description')}
              </h5>
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
  );
}

export default TechnicalTeam;
