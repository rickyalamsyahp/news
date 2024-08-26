import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Title } from '../../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Counter from '../../../Animation/Count/Count'
import Image from 'next/image'

export default function CountCommitments({ dataPortofolio }) {
  const c = useTranslations('homepage.commitments')
  const t = useTranslations('homepage.commitments.count')
  return (
    <Row className='py-0 py-lg-5 gap-3' style={{columnGap: '0.003rem !important'}}>
      <h3 className='fw-bold' style={{fontSize: '35px'}}>{c('by-number')}</h3>
      {dataPortofolio?.image?.data?.map((data, index) => (
        <Col key={index} className='p-0'>
          <Image
            src={`${process.env.NEXT_PUBLIC_HOST_IMAGE}${data.attributes.url}`}
            alt={`Image ${index}`}
            width={0}
            height={0}
            sizes='100vw'
            style={{
              display: 'block',
              padding: 0,
              margin: 0,
              width: '100%',
              height: 'auto',
            }}
          />
        </Col>
      ))}
    </Row>
  )
}
