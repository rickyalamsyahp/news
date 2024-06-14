import Image from 'next/image'
import React from 'react'
import HeroCommitment from '../../../assets/images/Hero-Commitment.png'

function Hero() {
  return (
    <section className='hero' id='hero-commitment'>
      <Image
        src={HeroCommitment}
        alt='hero-commitment'
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
