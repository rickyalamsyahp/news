import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

function ContentTab({ tabs, activeTab, transition }) {
  const t = useTranslations('about-us.journey.tabs')
  return (
    <Container>
      <Row>
        <Col>
          <div className='tab-content-container position-relative d-flex justify-content-center align-center flew-row'style={{height:500}}>
            <div className='img-journey-container p-4'>
              <Image
                alt={`img-journey-${tabs[activeTab].title}`}
                src={tabs[activeTab].content}
                className={`tab-content ${transition ? 'transition' : ''}`}
                width={tabs[activeTab].width}
                height={tabs[activeTab].height}
              />
            </div>
            <div className='description-journey-container d-grid'>
              <div className={`tab-content ${transition ? 'transition' : ''}`}>
                <h3 className='fw-bold'>{tabs[activeTab].text}</h3>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ContentTab
