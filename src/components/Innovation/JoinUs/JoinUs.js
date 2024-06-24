'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'
import { Container } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'

function JoinUs() {
  const t = useTranslations('innovation')
  return (
    <section className='bg-blue p-5'>
      <Container>
        <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
          <div className='py-4'>
            <h2 className='text-white mb-5'>{t('join-us')}</h2>
            <ButtonThird>{t('contact-us')}</ButtonThird>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  )
}

export default JoinUs
