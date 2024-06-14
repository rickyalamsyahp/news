import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Hero() {
  return (
    <section className='hero-component'>
      <Container fluid='xl' className='h-100'>
        <Row className='justify-content-md-center align-items-center h-100'>
          <Col md='auto'>
            <h1>Section Hero</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
