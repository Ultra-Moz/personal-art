import React, { useState } from "react";
import OutsideScene from "./scenes/OutsideScene";
import GateScene from "./scenes/GateScene";
import DoorScene from "./scenes/DoorScene";

const SCENES = {
  outside: OutsideScene,
  gate:GateScene,
  door:DoorScene
};

const App = () => {
  const [visible, setVisible] = useState(true);
  const [currentScene, setCurrentScene] = useState("outside");
  const [prevScene, setPrevScene] = useState(null);

  const goTo = (sceneId) => {
    setPrevScene(currentScene)
    setVisible(false);
    setTimeout(() => {
      setCurrentScene(sceneId);
      setVisible(true);
    }, 300);
  };
  const SceneComponent = SCENES[currentScene];

  return (
    <div className="w-screen min-h-screen bg-black flex items-center justify-center">
      <div
        className="relative overflow-hidden"
        style={{
          width: "min(100vw,177.78vh)",
          height: "min(100vh,56.25vw)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <SceneComponent goTo={goTo} />
      </div>
    </div>
  );
};

export default App;
