'use client'

import { Col, Row } from 'react-bootstrap'
import ThumbnailCommitments from '../../../../assets/images/commitments-homepage-thumbnail.png'
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll'
export default function Thumbnail() {
  return (
    <Row>
      <Col>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
          <Image
            src={ThumbnailCommitments}
            alt='thumbnail-commitments'
            priority
            className='w-100 h-100 py-2 py-md-5'
          />
        </ScrollAnimation>
      </Col>
    </Row>
  )
}
