import HeroCommitment from '../../../assets/images/Hero-Commitments.jpg'
import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'

function Hero({ dataHero }) {
  const t = useTranslations('hero')
  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${HeroCommitment.src})`,
      }}
    >
      <Reveal>
        <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
          {dataHero ? dataHero[0].headline : t('commitments')}
        </h1>
      </Reveal>
    </section>
  )
}

export default Hero
