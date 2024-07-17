import HeroHatcheryFarm from '../../../../assets/images/Hero-Hatchery-Farm.jpg'
import { useTranslations } from 'next-intl'
import Reveal from '../../../Animation/Reveal/Reveal'

function Hero() {
  const t = useTranslations('hero')
  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${HeroHatcheryFarm.src})`,
      }}
    >
      <Reveal>
        <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
          {t('hatchery-farm')}
        </h1>
      </Reveal>
    </section>
  )
}

export default Hero
