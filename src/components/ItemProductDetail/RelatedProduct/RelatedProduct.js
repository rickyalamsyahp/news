'use client'

import { Col, Container, Row } from 'react-bootstrap'
import Thumbnail from '../../../assets/images/species-common-carp.png'
import Image from 'next/image'
import { useRouter } from '../../../navigation'

function RelatedProduct() {
  const router = useRouter()
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
    <section className='bg-primary-subtle pt-5'>
      <Container className='pb-5'>
        <Row className='pt-5 gy-5'>
          <h4>Related Products</h4>
          {dataProduct.map((data, index) => (
            <Col
              key={`card-product-${index}`}
              xs={4}
              md={3}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                router.push('/item-product-detail')
              }}
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

export default RelatedProduct
