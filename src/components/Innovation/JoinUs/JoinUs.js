import { useTranslations } from 'next-intl'
import React from 'react'
import { ButtonThird } from '../../GeneralComponent/CustomButton/CustomButton'
import { Container } from 'react-bootstrap'
import Reveal from '../../Animation/Reveal/Reveal'
import { Link } from '../../../navigation'

function JoinUs() {
  const t = useTranslations('innovation')
  return (
    <section className='bg-blue p-0 p-md-5'>
      <Container>
        <div className='py-4'>
          <Reveal overflow={true}>
            <h3 className='text-white mb-3 mb-md-5'>{t('join-us')}</h3>
          </Reveal>
          <Reveal overflow={true}>
            <ButtonThird>
              <Link href='/contact-us'>{t('contact-us')}</Link>
            </ButtonThird>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default JoinUs
