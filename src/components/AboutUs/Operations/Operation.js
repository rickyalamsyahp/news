'use client'

import { useTranslations } from 'next-intl'
import { Col, Container, Row } from 'react-bootstrap'

function Operations() {
  const t = useTranslations('about-us')
  const operations1 = [
    {
      title: '5 Aquafeed',
      description: 'Medan, Lampung Purwakarta, Gresik, Banyuwangi',
    },
    {
      title: '12 Shrimp Hatcheries',
      description:
        'Pidie Jaya, West Bangka, South Lampung, Indramayu, Serang, Cilegon, Rembang, Banyuwangi, Buleleng, Jembrana, Sumbawa, Barru',
    },
    {
      title: '4 Shrimp Farms',
      description: 'Banyuwangi (2 locations), Situbondo (2 locations)',
    },
    {
      title: '5 Fish Hatcheries',
      description: 'Karawang, Sleman, Situbondo, Banjar, Tanah Laut',
    },
  ]
  const operations2 = [
    {
      title: '3 Fish Farms',
      description: 'Simalungun, Situbondo, Banyuwangi',
    },
    {
      title: '3 Seafood Processing',
      description:
        'Tilapia and Ocean Fish Processing - Simalungun; Value-Added Seafood Processing - Cirebon; Pangasius Processing - Banyuwangi',
    },
    {
      title: '4 Research and Development Facilities',
      description:
        'Aquaculture technology and development (Purwakarta), Japfa aquaculture research station (Medan, Purwakarta, Clanjur), Japfa Nutrition Lab (Gresik), aquaculture research center (Banyuwangi).',
    },
  ]

  return (
    <section className='bg-white pt-3 pt-md-5 position-relative'>
      <Container className='py-3 py-md-5'>
        <Row>
          <Col xs={12}>
            <h2 className='fw-bold pb-3 text-center'>{t('area')}</h2>
          </Col>
        </Row>
        <Row className='pt-4 justify-content-between'>
          <Col xs={5} className='p-0'>
            {operations1.map((data, index) => (
              <div
                key={`operation1-${index}`}
                className={`${index === operations1.length - 1 ? '' : 'border-bottom border-gray'} d-flex flex-column gap-4 justify-content-start py-4`}
              >
                <h4>{data.title}</h4>
                <h5>{data.description}</h5>
              </div>
            ))}
          </Col>
          <Col xs={5} className='p-0'>
            {operations2.map((data, index) => (
              <div
                key={`operation2-${index}`}
                className={`${index === operations2.length - 1 ? '' : 'border-bottom border-gray'} d-flex flex-column gap-4 justify-content-start py-4`}
              >
                <h4>{data.title}</h4>
                <h5>{data.description}</h5>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Operations
