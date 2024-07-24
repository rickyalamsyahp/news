import Image from 'next/image'
import Thumbnail from '../../../assets/images/carousel-1.png'
function CardNews() {
  return (
    <div className='d-flex fle-row gap-3 align-items-center'>
      <Image alt='card-news' src={Thumbnail.src} />
      <div className='d-flex flex-column gap-2'>
        <h6 className='text-dark'>Category</h6>
        <h4>
          Title Should be Here, This is The longest Title. It can be three lines
        </h4>
        <h6 className='text-dark'>16/02/2024</h6>
      </div>
    </div>
  )
}

export default CardNews
