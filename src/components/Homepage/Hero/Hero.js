'use client'
import HeroHomepage from '../../../assets/images/Hero-Home.gif'
import { useTranslations } from 'next-intl'
import Reveal from '../../Animation/Reveal/Reveal'
import { useState, useEffect } from 'react'

function Hero({ dataHero }) {
  const t = useTranslations('hero')
  const images = dataHero?.[0]?.image?.data.map(img => 
    `${process.env.NEXT_PUBLIC_HOST_IMAGE}${img.attributes.url}`
  ) || [HeroHomepage.src]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section
      className='hero'
      id='hero-homepage'
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <Reveal>
        <h1 className='fw-bold text-white m-auto w-75 text-center position-relative z-2'>
          {dataHero.length>0 ? dataHero[0].headline : ''}
        </h1>
      </Reveal>
    </section>
  )
}

export default Hero
