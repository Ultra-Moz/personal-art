import React, { useState } from 'react'

const DoorScene = ({goTo}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
    <img src="/images/door/door-scene-bg.png" alt="door scene" className="absolute inset-0 w-full h-full" />
    <img src={isHovered ? '/images/door/door-scene-door-opened.png' : '/images/door/door-scene-door-closed.png'} className='absolute inset-0 w-full h-full pointer-events-none z-10' />
          <svg viewBox="0 0 1920 1080" className="absolute inset-0 w-full h-full">
        <polygon
          points='730,240 1115,240 1115,850 730,850'
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => goTo("lounge")} />
      </svg>
    </>
  )
}

export default DoorScene

