'use client'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs'
import Image from 'next/image'
import Thumbnail from '../../assets/images/species-common-carp.png'

function ItemProduct() {
  const breadcrumbItemProduct = [
    {
      text: 'Home',
      href: '/',
      active: false,
    },
    {
      text: 'Total Solution',
      href: '/total-solutions',
      active: false,
    },
    {
      text: 'Aquafeed',
      href: '/aquafeed',
      active: false,
    },
    {
      text: 'Common Carp',
      href: '#',
      active: true,
    },
  ]
  const dataProduct = [
    {
      image: Thumbnail,
      text: 'PA Extruder',
    },
    {
      image: Thumbnail,
      text: 'PA Extruder',
    },
    {
      image: Thumbnail,
      text: 'PA Extruder',
    },
    {
      image: Thumbnail,
      text: 'PA Extruder',
    },
    {
      image: Thumbnail,
      text: 'PA Extruder',
    },
  ]
  return (
    <section className='unique-bg-3'>
      <Container className='py-5'>
        <Breadcrumbs data={breadcrumbItemProduct} />
        <h2 className='text-center pt-0 pt-md-5 pb-5 pb-md-3 fw-bold'>
          Common Carp
        </h2>
        <Image
          alt=''
          src={'/common-carp.png'}
          width={0}
          height={0}
          className='pt-4 pt-md-0 pb-4 pb-md-0'
          sizes='100vw'
          style={{
            width: '75%',
            height: 'auto',
            marginTop: '-100px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'grid',
          }}
        />
        <Row className='d-flex pt-5 pt-md-0' style={{ marginTop: '-100px' }}>
          <Col xs={4} md={2}>
            <Form.Select size='sm'>
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
            </Form.Select>
          </Col>
          <Col xs={4} md={2}>
            <Form.Select size='sm'>
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
            </Form.Select>
          </Col>
        </Row>
        <h6 className='pt-3'>
          Showing <strong>5 products</strong> for{' '}
          <strong>&quot;Grower&quot;</strong>
        </h6>
        <Row className='pt-5 gy-5'>
          {dataProduct.map((data, index) => (
            <Col
              key={`card-product-${index}`}
              xs={6}
              md={3}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={data.image}
                alt={data.text}
                className='w-100 h-auto rounded-top-3'
              />
              <h6
                className='p-3 p-md-5 bg-white text-primary rounded-bottom-3 text-center fw-bold'
                style={{
                  boxShadow:
                    '0px 2px 4px 0px rgba(195, 204, 222, 0.25), 0px 10px 10px 0px rgba(182, 190, 205, 0.20)',
                }}
              >
                {data.text}
              </h6>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ItemProduct
