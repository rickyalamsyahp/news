'use client'

import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export default function CardCommitments({ number, description }) {
  return (
    <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
      <div className='d-flex flex-column text-center'>
        <h1 className='p-3 text-blue fw-bold'>{number}</h1>
        <h4 className='text-dark fw-bold lh-base'>{description}</h4>
      </div>
    </ScrollAnimation>
  )
}
