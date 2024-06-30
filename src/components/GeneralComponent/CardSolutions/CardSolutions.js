import ArrowTopRight from '../../../assets/svg/arrow-top-right.svg'
import Image from 'next/image'
import Reveal from '../../Animation/Reveal/Reveal'

export default function CardSolutions({ text, image, delay }) {
  return (
    <Reveal delay={delay}>
      <div className='card-solution'>
        <ArrowTopRight alt='arrow-top-right' className='arrow-top-right' />
        <Image
          src={`/${image}.png`}
          fill
          alt={text}
          className='image-solution'
        />
        <h5>{text}</h5>
      </div>
    </Reveal>
  )
}
