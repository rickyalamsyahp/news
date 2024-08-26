import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs'
import ThumbsImage from './ThumbsImage/ThumbsImage'
import DescriptionProduct from './DescriptionProduct/DescriptionProduct'

function ItemProductDetail({ paramsSpecies, product }) {
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
      text: paramsSpecies.attributes.name,
      href: `/item-product/${paramsSpecies.id}`,
      active: false,
    },
    {
      text: product.feed_name,
      href: '#',
      active: true,
    },
  ]
  return (
    <section className='bg-secondary-subtle'>
      <Container className='py-5'>
        <Breadcrumbs data={breadcrumbItemProduct} />
        <Row className='py-4'>
          <Col xs={6} md={3}>
            <ThumbsImage product={product} />
          </Col>
          <Col xs={6} md={9}>
            <DescriptionProduct product={product} />
          </Col>
        </Row>
        <Row className='d-flex d-md-none gap-3'>
          <h6>{product.highlight}</h6>
          {/* <TableProduct /> */}
        </Row>
        {/* <Row className='d-none d-md-flex'>
          <h4 className='mb-3'>Related Products</h4>
          <TableRelated />
        </Row> */}
      </Container>
    </section>
  )
}

export default ItemProductDetail
