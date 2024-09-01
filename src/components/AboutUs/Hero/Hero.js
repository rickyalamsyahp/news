import HeroAboutUs from '../../../assets/images/Hero-About-Us.jpg'
import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'

function Hero({ dataHero }) {
  const t = useTranslations('hero')
  const image = `${process.env.NEXT_PUBLIC_HOST_IMAGE}${dataHero[0]?.image?.data[0].attributes.url}`

  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${image ? image : HeroAboutUs.src})`,
      }}
    >
      <Reveal>
        <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
          {dataHero.length>0 ? dataHero[0]?.headline : t('about-us')}
        </h1>
      </Reveal>
    </section>
  )
}

export default Hero
