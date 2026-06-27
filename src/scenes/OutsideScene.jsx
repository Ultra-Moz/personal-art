import React, { useState } from 'react'

const OutsideScene = ({ goTo }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <img src="/images/outside/outside-scene-bg.png" alt="outside" className="absolute inset-0 w-full h-full" />
      <img src={isHovered ? '/images/outside/outside-scene-door-opened.png' : '/images/outside/outside-scene-door-closed.png'} className='absolute inset-0 w-full h-full pointer-events-none z-10' />
      <svg viewBox="0 0 1920 1080" className="absolute inset-0 w-full h-full">
        <polygon
          points='770,454 775,809 585,805 581,459'
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => goTo("gate")} />
      </svg>
    </>

  )
}

export default OutsideScene