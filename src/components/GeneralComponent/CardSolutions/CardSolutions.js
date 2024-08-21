'use client'

import ArrowTopRight from '../../../assets/svg/arrow-top-right.svg'
import Image from 'next/image'
import Reveal from '../../Animation/Reveal/Reveal'
import { useRouter } from '../../../navigation'

export default function CardSolutions({ text, image, delay, link }) {
  const router = useRouter()
  return (
    <Reveal delay={delay}>
      <div className='card-solution' onClick={() => router.push(link)}>
        <ArrowTopRight alt='arrow-top-right' className='arrow-top-right' />
        <Image
          src={image ? image : `/${image}.png`}
          fill
          alt={text}
          className='image-solution'
        />
        <h5>{text}</h5>
      </div>
    </Reveal>
  )
}
