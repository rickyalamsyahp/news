import HeroSeafoodProcessing from '../../../../assets/images/Hero-Seafood-Processing.jpg'
import { useTranslations } from 'next-intl'
import Reveal from '../../../Animation/Reveal/Reveal'

function Hero() {
  const t = useTranslations('hero')
  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${HeroSeafoodProcessing.src})`,
      }}
    >
      <Reveal>
        <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
          {t('seafood-processing1')}
        </h1>
        <h2 className='fw-bold text-white m-auto text-center position-relative z-2'>
          {t('seafood-processing2')}
        </h2>
      </Reveal>
    </section>
  )
}

export default Hero
