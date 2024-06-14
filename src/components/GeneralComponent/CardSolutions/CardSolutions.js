import ArrowTopRight from '../../../assets/svg/arrow-top-right.svg'
import Image from 'next/image'

export default function CardSolutions({ text, image }) {
  return (
    <div className='card-solution'>
      <ArrowTopRight alt='arrow-top-right' className='arrow-top-right' />
      <Image src={`/${image}.png`} fill alt={text} className='image-solution' />
      <h5>{text}</h5>
    </div>
  )
}
