import React, { useState } from "react";
import NowPlaying from "../components/NowPlaying";

const STATIC_IMAGES = [
  { src: "/images/drawing-room/Background.PNG", alt: "white" },
  { src: "/images/drawing-room/bg.PNG",          alt: "background" },
  { src: "/images/drawing-room/bed.PNG",          alt: "bed" },
  { src: "/images/drawing-room/computer-table.PNG", alt: "computer table" },
  { src: "/images/drawing-room/curtains.PNG",    alt: "curtains" },
  { src: "/images/drawing-room/fan.PNG",         alt: "fan" },
  { src: "/images/drawing-room/laptop.PNG",      alt: "laptop" },
  { src: "/images/drawing-room/left-sofa.PNG",   alt: "left sofa" },
  { src: "/images/drawing-room/right-sofas.PNG", alt: "right sofas" },
  { src: "/images/drawing-room/showpiece.PNG",   alt: "show piece" },
  { src: "/images/drawing-room/table.PNG",       alt: "table" },
  { src: "/images/drawing-room/window.PNG",      alt: "window" },
  { src: "/images/drawing-room/ac.PNG",          alt: "ac" },
];

const DOOR_IMAGES = [
  {
    id: "bathroom-door",
    alt: "bathroom door",
    closed: "/images/drawing-room/bathroom-door-closed.PNG",
    opened: "/images/drawing-room/bathroom-door-opened.PNG",
  },
  {
    id: "outside-door",
    alt: "outside door",
    closed: "/images/drawing-room/outside-door-closed.PNG",
    opened: "/images/drawing-room/outside-door-opened.PNG",
  },
];

const HOTSPOTS = [
  {
    id: "computer-table",
    points: "1530,899  1618,641  1642,338 1917,303 1919,1025  1661,1058 ",
    hoverText: "Computer Table",
    navTarget:"computerTable"
  },
  {
    id: "right-sofas",
    points: "1590,544 1618,703  1517,861  982,673 974,578 1119,499",
    hoverText: "Sofas",
  },
  {
    id: "bathroom-door",
    points: "1008,355 1016,565 966,576 942,609 920,369",
    hoverText: "Enter the bathroom",
    linkedDoor: "bathroom-door",
  },
  {
    id: "outside-door",
    points: "771,584 759,357 907,376 918,617",
    hoverText: "Go outside",
    linkedDoor: "outside-door",
  },
  {
    id: "curtains",
    points: "594,346 604,573 653,543 713,579 724,336 221,306 253,564 292,646 379,598 424,332",
    hoverText: "Curtains",
  },
  {
    id: "window",
    points: "433,360 594,362 596,545 405,557",
    hoverText: "Window",
  },
  {
    id: "showpiece",
    points: "11,349 126,418 204,493 281,649 65,643 9,532",
    hoverText: "Showpiece",
  },
  {
    id: "bed",
    points: "352,608 599,576 744,586 909,619 924,668 808,646 474,726 436,641 326,649",
    hoverText: "Bed",
  },
  {
    id: "left-sofa",
    points: "11,622 147,693 422,657 438,720 673,917 743,897 814,984 642,1078 198,1077 5,1047",
    hoverText: "Sofa",
  },
  {
    id: "table",
    points: "600,711 826,654 1176,742 1154,861 1059,935 921,870 793,884 657,812",
    hoverText: "Table",
  },
  {
    id: "ac",
    points: "469,265 477,321 706,332 703,279",
    hoverText: "Air Conditioner",
  },
  {
    id: "fan",
    points: "596,161 638,240 831,232 910,257 1097,189 879,115 806,166",
    hoverText: "Fan",
  },
];

const DrawingRoomScene = ({ goTo, setHoveredText }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleEnter = (hotspot) => {
    setHoveredId(hotspot.linkedDoor ?? null);
    setHoveredText(hotspot.hoverText);
  };

  const handleLeave = () => {
    setHoveredId(null);
    setHoveredText(null);
  };

  return (
    <>
      {STATIC_IMAGES.map(({ src, alt }) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full"
        />
      ))}

      {DOOR_IMAGES.map(({ id, alt, closed, opened }) => (
        <img
          key={id}
          src={hoveredId === id ? opened : closed}
          alt={alt}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
      ))}

      <svg viewBox="0 0 1920 1080" className="absolute inset-0 w-full h-full">
        {HOTSPOTS.map((hotspot) => (
          <polygon
            key={hotspot.id}
            id={hotspot.id}
            points={hotspot.points}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => handleEnter(hotspot)}
            onMouseLeave={handleLeave}
            onClick={hotspot.navTarget ? () => goTo(hotspot.navTarget) : undefined}
          />
        ))}
      </svg>
    </>
  );
};

export default DrawingRoomScene;