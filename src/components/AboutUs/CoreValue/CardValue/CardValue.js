import dynamic from 'next/dynamic';
// import Image from 'next/image'
const Image = dynamic(() => import('next/image'), { ssr: false });
export const CardValue = ({
  data,
  index,
  active,
  setActive,
  setTransition,
}) => {
  const handleActive = () => {
    setTransition(true)
    setTimeout(() => {
      setTransition(false)
      setActive(index)
    }, 100) // match the transition duration in CSS
  }
  const handleMouseEnter = () => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
      setActive(index);
    }, 100); // match the transition duration in CSS
  };
  console.log(data.logo);
  
  return (
    <div
      className={`card-value ${active === index ? 'active' : ''}`}
      onClick={() => handleActive(index)}
      onMouseEnter={handleMouseEnter}
    >
      {/* {data.logo()} */}
      <div className="logo-container">
        <Image
          src={data.logo}
          alt="logo"
          width={150}
          height={150}
        />
      </div>
      <Image
        src={data.image}
        alt='image-value'
        className='image-value w-100 h-auto'
        width={500}
        height={500}
      />
      <h3 className='text-white text-center'>{data.title}</h3>
    </div>
  )
}
