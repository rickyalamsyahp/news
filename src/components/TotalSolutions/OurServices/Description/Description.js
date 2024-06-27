import React from 'react'
import { Col } from 'react-bootstrap'
import Reveal from '../../../Animation/Reveal/Reveal'

export default function Description() {
  return (
    <Col>
      <Reveal overflow={true}>
        <h4 className='mb-4 text-primary'>Our Services</h4>
        <h2 className='mb-4 fw-bold'>Solution for Your Aquaculture</h2>
        <h3 className='mb-5'>
          At STP, we&apos;re committed to provide solutions for your aquaculture
          needs with our services. Through our expertise, we excel in enhancing
          both the efficiency and productivity of your fish and shrimp
          operations.
        </h3>
      </Reveal>
    </Col>
  )
}
