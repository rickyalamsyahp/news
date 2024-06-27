'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

function Reveal({ children, overflow, delay, direction }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -250px 0px' })
  const animateControls = useAnimation()

  useEffect(() => {
    if (inView) {
      animateControls.start('visible')
    }
  }, [animateControls, inView])

  const standardHidden = { opacity: 0, y: 150 }
  const standardVisible = { opacity: 1, y: 0 }
  const topHidden = { opacity: 0, y: -300 }
  const topVisible = { opacity: 1, y: 0 }
  const leftHidden = { opacity: 0, x: -150 }
  const leftVisible = { opacity: 1, x: 0 }
  const rightHidden = { opacity: 0, x: 150 }
  const rightVisible = { opacity: 1, x: 0 }

  const handleDirectionAnimate = direction => {
    switch (direction) {
      case 'top':
        return {
          hidden: topHidden,
          visible: topVisible,
        }
      case 'right':
        return {
          hidden: rightHidden,
          visible: rightVisible,
        }
      case 'bottom':
      case 'left':
        return {
          hidden: leftHidden,
          visible: leftVisible,
        }
      default:
        return {
          hidden: standardHidden,
          visible: standardVisible,
        }
    }
  }
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        zIndex: 2,
        overflow: overflow ? 'hidden' : 'unset',
      }}
    >
      <motion.div
        variants={handleDirectionAnimate(direction)}
        initial='hidden'
        transition={{
          duration: 1,
          delay: delay ? delay : 0,
          ease: [0.39, 0.575, 0.565, 1],
        }}
        animate={animateControls}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
