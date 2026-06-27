import React, { useState } from 'react'

const LoungeScene = () => {
    const [hoveredId, setHoveredId] = useState(null)

  return (
        <>
        <img src="/images/lounge/background.PNG" alt="white" />
      <img src="/images/lounge/bg.PNG" alt="lounge" className="absolute inset-0 w-full h-full" />
      <img src={hoveredId === "kitchen-door" ? '/images/lounge/kitchen-door-open.PNG' : '/images/lounge/kitchen-door-closed.PNG'} alt="kitchen door" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/clock.PNG" alt="clock" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/dining-table.PNG" alt="dining table" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/fan.PNG" alt="fan" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/sofa.PNG" alt="sofa" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/table.PNG" alt="table" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/tv.PNG" alt="tv" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/brother-room-closed.PNG" alt="brothers room" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/drawing-room-closed.PNG" alt="drawing room" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/my-room-closed.PNG" alt="my room" className="absolute inset-0 w-full h-full" />
      <img src="/images/lounge/parents-room-closed.PNG" alt="parent room" className="absolute inset-0 w-full h-full" />
      {/* <img src={isHovered ? '/images/outside/outside-scene-door-opened.png' : '/images/outside/outside-scene-door-closed.png'} className='absolute inset-0 w-full h-full pointer-events-none z-10' /> */}
      
      <svg viewBox="0 0 1920 1080" className="absolute inset-0 w-full h-full">
        <polygon
        points='0,290 85,290 190,900 0,1000'
          fill="#32323270"
          className="cursor-pointer"
          id="kitchen-door"
          onMouseEnter={()=>{setHoveredId("kitchen-door")}}
          />
          <polygon
          points='540,360 630,360 626,610 550,600'
          fill="#32323270"
          className="cursor-pointer"
          id="drawing-room"
          />
          <polygon
          points='705,639 701,391 861,391 856,633'
           fill="#32323270"
          className="cursor-pointer"
          id="my-room"
          />
          <polygon
          points='1556,414 1645,404 1576,734  1516,697'
          fill="#32323270"
          className="cursor-pointer"
          id="parents-room"
          />
          <polygon
          points='1763,377 1680,746 1914,730 1917,363'
          fill="#32323270"
          className="cursor-pointer"
          id="brothers-room"
          />
          <polygon
          points='1583,738 1918,751 1920,1550 1729,1074 1549,944 1607,808'
          fill="#32323270"
          className="cursor-pointer"
          id="sofa"
          />
          <polygon
          points='930,1078 958,927 1617,960 1718,1079'
          fill="#32323270"
          className="cursor-pointer"
          id="table"
          />
           <polygon
          points='527,381  551,611 624,630 632,729 393,889 264,885 174,358'
          fill="#32323270"
          className="cursor-pointer"
          id="tv"
          />
           <polygon
          points='376,175 328,203 334,259 382,295 426,288  442,244 424,202'
          fill="#32323270"
          className="cursor-pointer"
          id="clock"
          />
           <polygon
          points='875,699 1393,730 1421,525 860,505'
          fill="#32323270"
          className="cursor-pointer"
          id="dining-table"
          />
          
      </svg>
    </>
  )
}

export default LoungeScene  