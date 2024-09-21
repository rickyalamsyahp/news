import { Col, Container, Row } from 'react-bootstrap'
import { useTranslations } from 'next-intl'
import CardEffectCarousel from '../../../GeneralComponent/CardEffectCarousel/CardEffectCarousel'

function VisionMission({ dataFishFarming, dataShrimpFarming }) {
  const t = useTranslations('hatchery-farm')
  var paragraphsFish = dataFishFarming[0].highlight.split(/(?:\r?\n)+/)
  const dataShrimp = dataShrimpFarming[0]?.image?.data.map((res, index) => ({
    src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res.attributes.url}`,
  }))
  const dataFish = dataFishFarming[0]?.image?.data.map((res, index) => ({
    src: `${process.env.NEXT_PUBLIC_HOST_IMAGE}${res.attributes.url}`,
  }))
  return (
    <section className='pt-5 pb-5 bg-light-subtle' id='farm'>
      <Container>
        <h2 className='text-center my-5'>
          {/* STP Farming */}
          <br /> {dataFishFarming.length > 0 ? dataFishFarming[0].title : ''}
        </h2>
        <Row className='card-hatchery-farm bg-white mb-3 mb-md-0'>
          <Col md={{ span: 7, order: '2' }} className='p-0 position-relative'>
            <CardEffectCarousel dataCarousel={dataFish} />
          </Col>
          <Col md={{ span: 5, order: '1' }} className='py-5 px-5'>
            <div className='py-4 card-title gap-5 d-flex flex-column'>
              <h3 className='fw-bold'>
                {dataFishFarming.length > 0 ? dataFishFarming[0].headline : ''}
              </h3>
              <h5>{dataFishFarming.length > 0 ? paragraphsFish[0] : ''}</h5>
              <h5>{dataFishFarming.length > 0 ? paragraphsFish[1] : ''}</h5>
              <h5>{dataFishFarming.length > 0 ? paragraphsFish[2] : ''}</h5>
              <h5>{dataFishFarming.length > 0 ? paragraphsFish[3] : ''}</h5>
            </div>
          </Col>
        </Row>
        <Row className='card-hatchery-farm bg-white'>
          <Col md={{ span: 7, order: '1' }} className='p-0 position-relative'>
            <CardEffectCarousel dataCarousel={dataShrimp} />
          </Col>
          <Col md={{ span: 5, order: '2' }}>
            <Row className='flex-column h-100 justify-content-between align-items-center'>
              <Col md={12} className='py-5 px-4'>
                <div className='py-4 card-title gap-5 d-flex flex-column'>
                  <h3 className='fw-bold'>
                    {dataShrimpFarming.length > 0
                      ? dataShrimpFarming[0].headline
                      : ''}
                  </h3>
                  <h5>
                    {dataShrimpFarming.length > 0
                      ? dataShrimpFarming[0].highlight
                      : ''}
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
