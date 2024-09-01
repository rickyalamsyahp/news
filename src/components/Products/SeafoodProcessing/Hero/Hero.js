import HeroSeafoodProcessing from '../../../../assets/images/Hero-Seafood-Processing.jpg'
import { useTranslations } from 'next-intl'
import Reveal from '../../../Animation/Reveal/Reveal'

function Hero({ dataHero }) {
  const t = useTranslations('hero')
  const image =
  dataHero.length>0 ?
    `${process.env.NEXT_PUBLIC_HOST_IMAGE}${dataHero[0]?.image?.data[0].attributes.url}`:''
  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${image ? image : HeroSeafoodProcessing.src}))`,
      }}
    >
      <Reveal>
        <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
          {dataHero.length>0 ? dataHero[0].headline : t('seafood-processing1')}
        </h1>
        {/* <h2 className='fw-bold text-white m-auto text-center position-relative z-2'>
          {t('seafood-processing2')}
        </h2> */}
      </Reveal>
    </section>
  )
}

export default Hero
