import Image from 'next/image'
import React from 'react'
import HeroHomepage from '../../../assets/images/Hero-Home.png'

function Hero() {
  return (
    <section className='hero' id='hero-homepage'>
      <Image
        src={HeroHomepage}
        alt='hero-homepage'
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
