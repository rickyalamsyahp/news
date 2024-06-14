import Image from 'next/image'
import React from 'react'
import HeroTotalSolutions from '../../../assets/images/Hero-Total-Solutions.png'

function Hero() {
  return (
    <section className='hero' id='hero-total-solutions'>
      <Image
        src={HeroTotalSolutions}
        alt='hero-total-solutions'
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
