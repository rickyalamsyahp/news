import { useTranslations } from 'next-intl'
import React from 'react'
import { ButtonThird } from '../../../GeneralComponent/CustomButton/CustomButton'
import { Container } from 'react-bootstrap'
import { Link } from '../../../../navigation'

function JoinUs() {
  const t = useTranslations('innovation')
  return (
    <section className='bg-blue p-0 p-md-5'>
      <Container>
        <div className='py-4'>
          <h3 className='text-white mb-3 mb-md-5'>{t('join-us')}</h3>
          <ButtonThird>
            <Link href='/contact-us'>{t('contact-us')}</Link>
          </ButtonThird>
        </div>
      </Container>
    </section>
  )
}

export default JoinUs
