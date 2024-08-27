'use client'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import Breadcrumbs from '../GeneralComponent/Breadcrumbs/Breadcrumbs'
import Image from 'next/image'
import { useRouter } from '../../navigation'
import { getProducts } from '../../api/responseApi'
import { useState } from 'react'

function ItemProduct({ locale, species, phases, shapes, dataProduct, id }) {
  const [productData, setProductData] = useState(dataProduct || [])
  const [phasesText, setPhasesText] = useState('')
  const [shapesText, setShapesText] = useState('')
  const router = useRouter()
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

  const handleShapes = async e => {
    const value = e.target.value
    const paramsSpecies = species.attributes.name
    const products = await (
      await getProducts({
        locale,
        species: paramsSpecies,
        phases: phasesText,
        shapes: value === 'Type' ? '*' : value,
      })
    ).data.data
    setProductData(products)
    setShapesText(value)
  }
  const handlePhases = async e => {
    const value = e.target.value
    const paramsSpecies = species.attributes.name
    const populates = {
      'populate[0]': 'species',
      'populate[1]': 'image',
    }
    const products = await (
      await getProducts({
        locale,
        species: paramsSpecies,
        populates,
        shapes: shapesText,
        phases: value === 'Phases' ? '' : value,
      })
    ).data.data

    setProductData(products)
    setPhasesText(value)
  }
  return (
    <section className='unique-bg-3'>
      <Container className='py-5'>
        <Breadcrumbs data={breadcrumbItemProduct} />
        <h2 className='text-center pt-0 pt-md-5 pb-5 pb-md-3 fw-bold'>
          {species.attributes.name}
        </h2>
        <Image
          alt=''
          src={`${process.env.NEXT_PUBLIC_HOST_IMAGE}${species.attributes.image.data.attributes.url}`}
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
            <Form.Select size='sm' onChange={handlePhases}>
              <option>Phases</option>
              {phases.map(data => (
                <option
                  key={`phases-${data.attributes.name}`}
                  value={data.attributes.name}
                >
                  {data.attributes.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={4} md={2}>
            <Form.Select size='sm' onChange={handleShapes}>
              <option>Type</option>
              {shapes.map(data => (
                <option
                  key={`shapes-${data.attributes.name}`}
                  value={data.attributes.name}
                >
                  {data.attributes.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <h6 className='pt-3'>
          Showing <strong>{productData.length}</strong> for{' '}
          <strong>&quot;{shapesText || phasesText}&quot;</strong>
        </h6>
        <Row className='pt-5 gy-5'>
          {productData.length === 0 ? (
            <Card className='p-4 border-0'>
              <Card.Body>
                <h3 className='text-muted text-center'>
                  THERE'S NO DATA PRODUCT
                </h3>
              </Card.Body>
            </Card>
          ) : (
            productData.map((data, index) => (
              <Col
                key={`card-product-${index}`}
                xs={6}
                md={3}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  router.push(`${id}/${data.attributes.slug}`)
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes?.image?.data?.attributes?.url}`}
                  alt={data.attributes.feed_name}
                  width={0}
                  height={300}
                  sizes='100vw'
                  className='w-100 object-fit-contain rounded-top-3'
                />
                <h6
                  className='p-3 p-md-5 bg-white text-primary rounded-bottom-3 text-center fw-bold'
                  style={{
                    boxShadow:
                      '0px 2px 4px 0px rgba(195, 204, 222, 0.25), 0px 10px 10px 0px rgba(182, 190, 205, 0.20)',
                  }}
                >
                  {data.attributes.feed_name}
                </h6>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  )
}

export default ItemProduct
