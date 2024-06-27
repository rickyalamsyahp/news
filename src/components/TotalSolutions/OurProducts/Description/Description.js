import React from 'react'
import { Col } from 'react-bootstrap'
import Reveal from '../../../Animation/Reveal/Reveal'

export default function Description() {
  return (
    <Col>
      <Reveal overflow={true}>
        <h4 className='mb-5 text-primary'>Our Products</h4>
        <h3 className='mb-5'>
          Step into the world of STP, where innovative and sustainable feed
          production, hatcheries, and farming converge to drive industry
          success. From our state-of-the-art feed production facilities that
          utilize cutting-edge technology and precision nutrition to ensure
          optimal animal health, hatchery operations, and farm management.
          Discover how our integrated approach enhances productivity for our
          partners across the nation.
        </h3>
      </Reveal>
    </Col>
  )
}
