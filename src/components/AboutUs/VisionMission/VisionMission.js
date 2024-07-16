'use client'

import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../GeneralComponent/Title/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import VisionImage from '../../../assets/images/vision-image.jpg'
import MissionImage from '../../../assets/images/mission-image.jpg'
import { useEffect, useState } from 'react'

function VisionMission() {
  const [showDetailVision, setShowDetailVision] = useState(0)
  const [showDetailMission, setShowDetailMission] = useState(0)
  const t = useTranslations('about-us.vision-mission')
  const handleClickVision = () => {
    setShowDetailVision(1)
  }
  const handleClickMission = () => {
    setShowDetailMission(1)
  }
  useEffect(() => {
    if (showDetailVision === 1) {
      const timer = setTimeout(() => {
        setShowDetailVision(0)
      }, 5000)
      return () => clearTimeout(timer)
    }
    if (showDetailMission === 1) {
      const timer = setTimeout(() => {
        setShowDetailMission(0)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showDetailVision, showDetailMission])
  return (
    <section className='pt-0 pt-md-5 pb-5'>
      <Container>
        <Row className='card-vision-mission bg-white mb-3 mb-md-0'>
          <Col md={{ span: 5, order: '2' }} className='p-0 position-relative'>
            <Image
              alt='vision-image'
              src={VisionImage}
              className='w-100 h-auto'
            />
            <div
              className={`p-3 bg-warning position-absolute top-0 h-100 w-100 opacity-${showDetailVision} card-detail-vision`}
            >
              <div className='border border-white h-100 rounded-4 px-5 d-flex align-items-center flex-colum justify-content-center text-white'>
                <h4>{t('vision.detail')}</h4>
              </div>
            </div>
          </Col>
          <Col md={{ span: 7, order: '1' }} className='py-5 px-5'>
            <div className='py-4 card-title d-flex flex-column'>
              <Title
                subtitle={t('vision.title')}
                title={t('vision.description')}
                readMore={t('readmore')}
                onClick={handleClickVision}
              />
            </div>
          </Col>
        </Row>
        <Row className='card-vision-mission bg-white'>
          <Col md={{ span: 5, order: '1' }} className='p-0 position-relative'>
            <Image
              alt='mission-image'
              src={MissionImage}
              className='w-100 h-100 object-fit-cover'
            />
            <div
              className={`p-3 position-absolute top-0 h-100 w-100 opacity-${showDetailMission} card-detail-mission`}
            >
              <div className='border border-white h-100 rounded-4 px-5 d-flex align-items-center flex-colum justify-content-center text-white'>
                <h4>{t('mission.detail')}</h4>
              </div>
            </div>
          </Col>
          <Col md={{ span: 7, order: '2' }}>
            <Row className='flex-column h-100 justify-content-between align-items-center'>
              <Col md={10} className='py-5 px-5'>
                <div className='py-4 card-title d-flex flex-column'>
                  <Title
                    subtitle={t('mission.title')}
                    title={t('mission.description')}
                    readMore={t('readmore')}
                    onClick={handleClickMission}
                  />
                </div>
              </Col>
              <Col md={12} className='p-0'>
                <h5 className='text-center pb-4'>
                  {t('mission.deliver.title')}
                </h5>
                <Row className='m-auto w-100'>
                  <Col className='py-5 px-4 card-mission-deliver'>
                    <h4 className='text-warning'>01.</h4>
                    <h5>{t('mission.deliver.1')}</h5>
                  </Col>
                  <Col className='py-5 px-4 card-mission-deliver'>
                    <h4 className='text-warning'>02.</h4>
                    <h5>{t('mission.deliver.2')}</h5>
                  </Col>
                  <Col className='py-5 px-4 card-mission-deliver'>
                    <h4 className='text-warning'>03.</h4>
                    <h5>{t('mission.deliver.3')}</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VisionMission
