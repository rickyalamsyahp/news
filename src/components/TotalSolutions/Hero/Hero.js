import HeroHomepage from '../../../assets/images/commitments-homepage-thumbnail.png'
import { useTranslations } from 'next-intl'

function Hero() {
  const t = useTranslations('hero')
  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${HeroHomepage.src})`,
      }}
    >
      <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
        {t('total-solutions')}
      </h1>
    </section>
  )
}

export default Hero