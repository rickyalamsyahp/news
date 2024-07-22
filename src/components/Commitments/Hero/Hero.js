import HeroCommitment from '../../../assets/images/Hero-Commitments.jpg'
import { useTranslations } from 'next-intl'

function Hero() {
  const t = useTranslations('hero')
  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${HeroCommitment.src})`,
      }}
    >
      <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
        {t('commitments')}
      </h1>
    </section>
  )
}

export default Hero
