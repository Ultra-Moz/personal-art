import React, { useState } from "react";
import NowPlaying from "../components/NowPlaying";

const STATIC_IMAGES = [
  {src:"/images/lounge/background.PNG", alt:"white"},
  {src:"/images/lounge/bg.PNG", alt:"lounge"},
  {src:"/images/lounge/clock.PNG", alt:"clock"},
  {src:"/images/lounge/dining-table.PNG", alt:"dining table"},
  {src:"/images/lounge/fan.PNG", alt:"fan"},
  {src:"/images/lounge/sofa.PNG", alt:"sofa"},
  {src:"/images/lounge/table.PNG", alt:"table"},
  {src:"/images/lounge/tv.PNG", alt:"lounge"},
]

const DOOR_IMAGES = [
  {
    id:"kitchen-door",
    opened: "/images/lounge/kitchen-door-opened.PNG",
    closed:"/images/lounge/kitchen-door-closed.PNG",
    alt:"kitchen door",
  },
  {
    id:"brother-room",
    opened: "/images/lounge/brother-room-opened.PNG",
    closed:"/images/lounge/brother-room-closed.PNG",
    alt:"brother room",
  },
  {
    id:"drawing-room",
    opened: "/images/lounge/drawing-room-opened.PNG",
    closed:"/images/lounge/drawing-room-closed.PNG",
    alt:"drawing room",
  },
  {
    id:"my-room",
    opened: "/images/lounge/my-room-opened.PNG",
    closed:"/images/lounge/my-room-closed.PNG",
    alt:"my room",
  },
  {
    id:"parents-room",
    opened: "/images/lounge/parents-room-opened.PNG",
    closed:"/images/lounge/parents-room-closed.PNG",
    alt:"parents room",
  }
]

const HOTSPOTS = [
  {
    id:"kitchen-door",
    points:"0,290 85,290 190,900 0,1000",
    hoverText:"Enter the Kitchen",
    linkedDoor:"kitchen-door"
  },
  {
    id:"drawing-room",
    points:"540,360 630,360 626,610 550,600",
    hoverText:"Enter the drawing room",
    linkedDoor:"drawing-room",
    navTarget: "drawingRoom"
  },
  {
    id:"my-room",
    points:"705,639 701,391 861,391 856,633",
    hoverText:"Enter my room",
    linkedDoor:"my-room"
  },
  {
    id:"parents-room",
    points:"1556,414 1645,404 1576,734  1516,697",
    hoverText:"Enter my parents room",
    linkedDoor:"parents-room"
  },
  {
    id:"brothers-room",
    points:"1763,377 1680,746 1914,730 1917,363",
    hoverText:"Enter my brother's room",
    linkedDoor:"brother-room"
  },
  {
    id:"sofa",
    points:"1583,738 1918,751 1920,1550 1729,1074 1549,944 1607,808",
    hoverText:"Sofa",
  },
  {
    id:"table",
    points:"930,1078 958,927 1617,960 1718,1079",
    hoverText:"Table",
  },
  {
    id:"tv",
    points:"527,381  551,611 624,630 632,729 393,889 264,885 174,358",
    hoverText:"Television",
  },
  {
    id:"clock",
    points:"376,175 328,203 334,259 382,295 426,288 442,244 424,202",
    hoverText:"Clock",
  },
  {
    id:"dining-table",
    points:"875,699 1393,730 1421,525 860,505",
    hoverText:"Dining Table",
  },
]



const LoungeScene = ({ goTo, setHoveredText }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
    {STATIC_IMAGES.map((image)=>{
      return <img
      key={image.src}
        src={image.src}
        className="absolute inset-0 w-full h-full"
        alt={image.alt}
      />
    })}

    {DOOR_IMAGES.map(({id,alt,opened,closed})=>{
      return (<img
        src={
          hoveredId === id
            ? opened
            : closed
        }
        alt={alt}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />)
    })}
    
      
      
      <svg viewBox="0 0 1920 1080" className="absolute inset-0 w-full h-full">
        {HOTSPOTS.map(({id, points, hoverText, linkedDoor, navTarget})=>{
          return (
          <polygon
          points={points}
          fill="transparent"
          className="cursor-pointer"
          id={id}
          onMouseEnter={() => {
            setHoveredId(linkedDoor || null);
            setHoveredText(hoverText);
          }}
          onMouseLeave={() => {
            setHoveredId(null);
            setHoveredText(null);
          }}
          onClick={navTarget ? () => goTo(navTarget) : undefined}
        />
          )
        })}
      
      </svg>
    </>
  );
};

export default LoungeScene;
