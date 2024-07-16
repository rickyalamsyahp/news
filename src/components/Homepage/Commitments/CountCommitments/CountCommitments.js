import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslations } from 'next-intl'
import Counter from '../../../Animation/Count/Count'

export default function CountCommitments() {
  const t = useTranslations('homepage.commitments.count')
  return (
    <Row className='py-0 py-lg-5'>
      {[12, 4, 5, 3, 3, 4].map((data, index) => (
        <Col key={`card-commitment-${index + 1}`} xs={4} sm>
          <div className='d-flex flex-column text-center'>
            <Counter from={0} to={data} />
            <h4 className='text-dark fw-bold lh-base'>
              {t.rich(`${index + 1}`, {
                br: () => <br />,
              })}
            </h4>
          </div>
        </Col>
      ))}
    </Row>
  )
}
