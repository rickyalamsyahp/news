import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs'
import ThumbsImage from './ThumbsImage/ThumbsImage'
import DescriptionProduct from './DescriptionProduct/DescriptionProduct'

function ItemProductDetail() {
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
      href: '/item-product',
      active: false,
    },
    {
      text: 'PA Extruder',
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
            <ThumbsImage />
          </Col>
          <Col xs={6} md={9}>
            <DescriptionProduct />
          </Col>
        </Row>
        <Row className='d-flex d-md-none gap-3'>
          <h6>
            PA Extruder is a premium floating pellet feed designed for the
            grower phase of carp species. This environmentally friendly feed
            promotes optimal growth in carp, whether in floating net cages,
            fast-flowing water ponds, or earthen ponds. With a protein content
            of 28%, PA Extruder ensures consistent quality in fish growth.
          </h6>
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
