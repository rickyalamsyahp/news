'use client'

import React, { useRef, useState, useEffect, memo } from 'react'
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel'
import Image from 'next/image'

function CardEffectCarousel({ dataCarousel, cardWidth }) {
  const ref = useRef()
  return (
    <div
      style={{ width: '100%', position: 'relative' }}
      className='stacked-carousel-container'
    >
      <ResponsiveContainer
        carouselRef={ref}
        render={(width, carouselRef) => (
          <StackedCarousel
            ref={carouselRef}
            slideComponent={Slide}
            slideWidth={cardWidth}
            carouselWidth={width}
            data={dataCarousel}
            maxVisibleSlide={3}
            currentVisibleSlide={3}
            disableSwipe
            fadeDistance={0}
            customScales={[1, 0.85, 0.7]}
            transitionTime={450}
          />
        )}
      />
    </div>
  )
}

const Slide = memo(function Slide(props) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props
  const [loadDelay, setLoadDelay] = useState()
  const [removeDelay, setRemoveDelay] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isCenterSlide) {
      clearTimeout(removeDelay)
      setLoadDelay(setTimeout(() => setLoaded(true), 1000))
    } else {
      clearTimeout(loadDelay)
      if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 1000))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCenterSlide])

  useEffect(() => {
    return () => {
      clearTimeout(removeDelay)
      clearTimeout(loadDelay)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { src } = data[dataIndex]

  return (
    <div className='twitch-card' draggable={false}>
      <Image
        className='cover-image fill'
        src={src}
        alt='card-image'
        onClick={() => {
          if (!isCenterSlide) swipeTo(slideIndex)
        }}
      />
    </div>
  )
})

export default CardEffectCarousel
