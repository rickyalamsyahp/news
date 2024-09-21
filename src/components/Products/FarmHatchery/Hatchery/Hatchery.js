import { Col, Container, Row } from 'react-bootstrap'
import { useTranslations } from 'next-intl'
import CardEffectCarousel from '../../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

function VisionMission({ dataShrimpHatchery, dataFishHatchery }) {
  const t = useTranslations('hatchery-farm')
  var paragraphsShrimp = dataShrimpHatchery[0].highlight.split(/(?:\r?\n)+/)
  var paragraphsFish = dataFishHatchery[0].highlight.split(/(?:\r?\n)+/)

  const dataShrimp = dataShrimpHatchery[0]?.image?.data.map((res, index) => ({
    src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res.attributes.url}`,
  }))
  const dataFish = dataFishHatchery[0]?.image?.data.map((res, index) => ({
    src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res.attributes.url}`,
  }))

  return (
    <section className='pt-5 pb-5 bg-secondary-subtle' id='hatchery'>
      <Container>
        <h2 className='text-center mb-5'>
          {/* STP Hatchery */}
          <br />{' '}
          {dataShrimpHatchery.length > 0 ? dataShrimpHatchery[0].title : ''}
        </h2>
        <Row className='card-hatchery-farm bg-white mb-3 mb-md-0'>
          <Col
            xs={12}
            md={{ span: 7, order: '2' }}
            className='p-0 pt-5 pt-md-0 position-relative'
          >
            <CardEffectCarousel dataCarousel={dataShrimp} />
          </Col>
          <Col xs={12} md={{ span: 5, order: '1' }} className='py-5 px-5'>
            <div className='py-4 card-title gap-5 d-flex flex-column'>
              <h3 className='fw-bold'>
                {dataShrimpHatchery.length > 0
                  ? dataShrimpHatchery[0].headline
                  : ''}
              </h3>
              <h5>
                {dataShrimpHatchery.length > 0 ? paragraphsShrimp[0] : ''}
              </h5>
              <h5>
                {dataShrimpHatchery.length > 0 ? paragraphsShrimp[1] : ''}
              </h5>
            </div>
          </Col>
        </Row>
        <Row className='card-hatchery-farm bg-white'>
          <Col md={{ span: 7, order: '1' }} className='p-0 position-relative'>
            <CardEffectCarousel dataCarousel={dataFish} />
          </Col>
          <Col md={{ span: 5, order: '2' }}>
            <Row className='flex-column h-100 justify-content-between align-items-center'>
              <Col md={12} className='py-5 px-4'>
                <div className='py-4 card-title gap-5 d-flex flex-column'>
                  <h3 className='fw-bold'>
                    {dataFishHatchery.length > 0
                      ? dataFishHatchery[0].headline
                      : ''}
                  </h3>
                  <h5>
                    {dataFishHatchery.length > 0 ? paragraphsFish[0] : ''}
                  </h5>
                  <h5>
                    {dataFishHatchery.length > 0 ? paragraphsFish[1] : ''}
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VisionMission
