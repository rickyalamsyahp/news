import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

function ContentTab({ tabs, activeTab, transition }) {
  const t = useTranslations('about-us.journey.tabs')
  return (
    <Container>
      <Row>
        <Col>
          <div className='tab-content-container position-relative d-flex justify-content-center align-center flew-row'>
            <div className='img-journey-container w-50 h-auto p-4'>
              <Image
                alt={`img-journey-${tabs[activeTab].title}`}
                src={tabs[activeTab].content}
                className={`tab-content ${transition ? 'transition' : ''}`}
              />
            </div>
            <div className='description-journey-container w-50 d-grid'>
              <div className={`tab-content ${transition ? 'transition' : ''}`}>
                <h4 className='text-warning fw-bold'>
                  {tabs[activeTab].title}
                </h4>
                <h3>{t(`${tabs[activeTab].title}`)}</h3>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ContentTab
