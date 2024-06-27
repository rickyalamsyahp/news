import { useTranslations } from 'next-intl'
import React from 'react'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'
import { Container } from 'react-bootstrap'
import Reveal from '../../Animation/Reveal/Reveal'

function JoinUs() {
  const t = useTranslations('innovation')
  return (
    <section className='bg-blue p-0 p-md-5'>
      <Container>
        <div className='py-4'>
          <Reveal overflow={true}>
            <h2 className='text-white mb-3 mb-md-5'>{t('join-us')}</h2>
          </Reveal>
          <Reveal overflow={true}>
            <ButtonThird>{t('contact-us')}</ButtonThird>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default JoinUs
