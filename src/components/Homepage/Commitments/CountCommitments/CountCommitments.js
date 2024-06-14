import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CardCommitments from './CardCommitments/CardCommitments'
import { useTranslations } from 'next-intl'

export default function CountCommitments() {
  const t = useTranslations('homepage.commitments.count')
  return (
    <Row className='py-5'>
      {[0, 1, 2, 3, 4, 5].map(data => (
        <Col key={`card-commitment-${data + 1}`}>
          <CardCommitments
            number={Math.floor(Math.random() * 10 + 1)}
            description={t(`${data + 1}`)}
          />
        </Col>
      ))}
    </Row>
  )
}
