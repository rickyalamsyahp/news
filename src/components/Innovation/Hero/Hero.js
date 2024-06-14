import Image from 'next/image'
import React from 'react'
import HeroInnovation from '../../../assets/images/Hero-Innovation.png'

function Hero() {
  return (
    <section className='hero' id='hero-innovation'>
      <Image
        src={HeroInnovation}
        alt='hero-innovation'
        priority
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </section>
  )
}

export default Hero
