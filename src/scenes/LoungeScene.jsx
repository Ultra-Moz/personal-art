import React, { useState } from "react";

const LoungeScene = ({ goTo, setHoveredText }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <img
        src="/images/lounge/background.PNG"
        className="absolute inset-0 w-full h-full"
        alt="white"
      />
      <img
        src="/images/lounge/bg.PNG"
        alt="lounge"
        className="absolute inset-0 w-full h-full"
      />
      <img
        src={
          hoveredId === "kitchen-door"
            ? "/images/lounge/kitchen-door-opened.PNG"
            : "/images/lounge/kitchen-door-closed.PNG"
        }
        alt="kitchen door"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      <img
        src={
          hoveredId === "brothers-room"
            ? "/images/lounge/brother-room-opened.PNG"
            : "/images/lounge/brother-room-closed.PNG"
        }
        alt="brothers room"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      <img
        src={
          hoveredId === "drawing-room"
            ? "/images/lounge/drawing-room-opened.PNG"
            : "/images/lounge/drawing-room-closed.PNG"
        }
        alt="drawing room"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      <img
        src={
          hoveredId === "my-room"
            ? "/images/lounge/my-room-opened.PNG"
            : "/images/lounge/my-room-closed.PNG"
        }
        alt="my room"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      <img
        src={
          hoveredId === "parents-room"
            ? "/images/lounge/parents-room-opened.PNG"
            : "/images/lounge/parents-room-closed.PNG"
        }
        alt="parent room"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      <img
        src="/images/lounge/clock.PNG"
        alt="clock"
        className="absolute inset-0 w-full h-full"
      />
      <img
        src="/images/lounge/dining-table.PNG"
        alt="dining table"
        className="absolute inset-0 w-full h-full"
      />
      <img
        src="/images/lounge/fan.PNG"
        alt="fan"
        className="absolute inset-0 w-full h-full"
      />
      <img
        src="/images/lounge/sofa.PNG"
        alt="sofa"
        className="absolute inset-0 w-full h-full"
      />
      <img
        src="/images/lounge/table.PNG"
        alt="table"
        className="absolute inset-0 w-full h-full"
      />
      <img
        src="/images/lounge/tv.PNG"
        alt="tv"
        className="absolute inset-0 w-full h-full"
      />
      <svg viewBox="0 0 1920 1080" className="absolute inset-0 w-full h-full">
        <polygon
          points="0,290 85,290 190,900 0,1000"
          fill="transparent"
          className="cursor-pointer"
          id="kitchen-door"
          onMouseEnter={() => {
            setHoveredId("kitchen-door");
            setHoveredText("Enter the kitchen");
          }}
          onMouseLeave={() => {
            setHoveredId(null);

            setHoveredText(null);
          }}
        />
        <polygon
          points="540,360 630,360 626,610 550,600"
          fill="transparent"
          className="cursor-pointer"
          id="drawing-room"
          onMouseEnter={() => {
            setHoveredId("drawing-room");
            setHoveredText("Enter the drawing room");
          }}
          onMouseLeave={() => {
            setHoveredId(null);
            setHoveredText(null);
          }}
          onClick={() => goTo("drawingRoom")}
        />
        <polygon
          points="705,639 701,391 861,391 856,633"
          fill="transparent"
          className="cursor-pointer"
          id="my-room"
          onMouseEnter={() => {
            setHoveredId("my-room");
            setHoveredText("Enter my room");
          }}
          onMouseLeave={() => {
            setHoveredId(null);
            setHoveredText(null);
          }}
        />
        <polygon
          points="1556,414 1645,404 1576,734  1516,697"
          fill="transparent"
          className="cursor-pointer"
          id="parents-room"
          onMouseEnter={() => {
            setHoveredId("parents-room");
            setHoveredText("Enter my parents room");
          }}
          onMouseLeave={() => {
            setHoveredId(null);
            setHoveredText(null);
          }}
        />
        <polygon
          points="1763,377 1680,746 1914,730 1917,363"
          fill="transparent"
          className="cursor-pointer"
          id="brothers-room"
          onMouseEnter={() => {
            setHoveredId("brothers-room");
            setHoveredText("Enter my brother's room");
          }}
          onMouseLeave={() => {
            setHoveredId(null);
            setHoveredText(null);
          }}
        />
        <polygon
          points="1583,738 1918,751 1920,1550 1729,1074 1549,944 1607,808"
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={() => setHoveredText("Sofa")}
          onMouseLeave={() => setHoveredText(null)}
          id="sofa"
        />
        <polygon
          points="930,1078 958,927 1617,960 1718,1079"
          fill="transparent"
          id="table"
          className="cursor-pointer"
          onMouseEnter={() => setHoveredText("Table")}
          onMouseLeave={() => setHoveredText(null)}
        />
        <polygon
          points="527,381  551,611 624,630 632,729 393,889 264,885 174,358"
          fill="transparent"
          className="cursor-pointer"
          id="tv"
          onMouseEnter={() => setHoveredText("Television")}
          onMouseLeave={() => setHoveredText(null)}
        />
        <polygon
          points="376,175 328,203 334,259 382,295 426,288  442,244 424,202"
          fill="transparent"
          className="cursor-pointer"
          id="clock"
          onMouseEnter={() => setHoveredText("Clock")}
          onMouseLeave={() => setHoveredText(null)}
        />
        <polygon
          points="875,699 1393,730 1421,525 860,505"
          fill="transparent"
          className="cursor-pointer"
          id="dining-table"
          onMouseEnter={() => setHoveredText("Dining Table")}
          onMouseLeave={() => setHoveredText(null)}
        />
      </svg>
    </>
  );
};

export default LoungeScene;
