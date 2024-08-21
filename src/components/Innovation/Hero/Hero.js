import HeroInnovation from '../../../assets/images/Hero-Innovations.jpg'
import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'

function Hero({ dataHero }) {
  const t = useTranslations('hero.innovation')
  const image = `${process.env.NEXT_PUBLIC_HOST_IMAGE}${dataHero[0]?.image?.data[0]?.attributes?.url}`
  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${image ? image : HeroInnovation.src})`,
      }}
    >
      <Reveal>
        <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
          {dataHero ? dataHero[0]?.headline : t('title')}
        </h1>
      </Reveal>
      {/* <Reveal overflow={true}>
        <h6 className='fw-light text-white m-auto w-75 text-center position-relative z-2 mt-3 d-block d-md-none'>
          {t('description')}
        </h6>
      </Reveal> */}
    </section>
  )
}

export default Hero
