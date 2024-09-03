import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Title } from '../../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Counter from '../../../Animation/Count/Count'
import Image from 'next/image'
import Reveal from '../../../Animation/Reveal/Reveal'

export default function CountCommitments({ dataPortofolio }) {
  const c = useTranslations('homepage.commitments')
  const t = useTranslations('homepage.commitments.count')

  return (
    <Row
      className='py-0 py-lg-5 gap-3'
      style={{ columnGap: '0.003rem !important' }}
    >
      <Reveal>
        <h3 className='fw-bold'>
          {dataPortofolio ? dataPortofolio.headline : ''}
        </h3>
      </Reveal>
      {dataPortofolio?.image?.data?.map((data, index) => (
        <Col key={index} className='p-0'>
          <Reveal>
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
          </Reveal>
        </Col>
      ))}
    </Row>
  )
}
