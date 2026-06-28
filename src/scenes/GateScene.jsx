import React from "react";

const GateScene = ({ goTo, setHoveredText }) => {
  return (
    <>
      <img
        src="/images/gate/gate-scene.png"
        alt="gate scene"
        className="absolute inset-0 w-full h-full"
      />
      <svg viewBox="0 0 1920 1080" className="absolute inset-0 w-full h-full">
        <polygon
          points="501,345 225,339 251,723 520,661"
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={() => setHoveredText("Enter the hallway")}
          onMouseLeave={() => setHoveredText(null)}
          onClick={() => goTo("door")}
        />
      </svg>
    </>
  );
};

export default GateScene;
