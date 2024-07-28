import { useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'

function Introduction() {
  const t = useTranslations('seafood-processing')
  return (
    <section className='bg-secondary-subtle py-5'>
      <Container>
        <Row>
          <Col>
            <h3 className='text-center'>{t('introduction')}</h3>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Introduction
