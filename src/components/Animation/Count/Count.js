'use client'

import { animate, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

export default function Counter({ from, to }) {
  const [number, setNumber] = useState(0)
  const nodeRef = useRef()
  const inView = useInView(nodeRef, {
    once: true,
    margin: '0px 0px -250px 0px',
  })

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          setNumber(value.toFixed(0))
        },
      })

      return () => controls.stop()
    }
  }, [from, inView, to])

  return (
    <h1 className='p-3 text-blue fw-bold' ref={nodeRef}>
      {number}
    </h1>
  )
}
