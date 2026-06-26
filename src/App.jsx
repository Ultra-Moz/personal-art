import React, { useState } from "react";
import OutsideScene from "./scenes/OutsideScene";
import GateScene from "./scenes/GateScene";
import DoorScene from "./scenes/DoorScene";

const SCENES = {
  outside: OutsideScene,
  gate: GateScene,
  door: DoorScene,
};

const App = () => {
  const [visible, setVisible] = useState(true);
  const [currentScene, setCurrentScene] = useState("outside");
  const [prevScenes, setPrevScenes] = useState([])

  const goTo = (sceneId) => {
    setPrevScenes((prevHistory => [...prevHistory, currentScene]));
    setVisible(false);
    setTimeout(() => {
      setCurrentScene(sceneId);
      setVisible(true);
    }, 300);
  };

const goBack = () => {
  
  if (prevScenes.length === 0) return;

  
  const lastScene = prevScenes[prevScenes.length - 1];
  const historyCopy = [...prevScenes];
  historyCopy.pop();

  
  setVisible(false);

  
  setTimeout(() => {
    setCurrentScene(lastScene);
    setPrevScenes(historyCopy);
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

        <button
          className="text-3xl text-red-900 tracking-wider left-5 top-5 z-50 font-serif relative group
             cursor-pointer transition-colors duration-300
             disabled:text-gray-400 disabled:cursor-not-allowed"
          onClick={() => goBack()}
          disabled={prevScenes.length === 0}
        >
          Go Back
          <span className="absolute bottom-0 left-0 w-full h-0.75 bg-red-900 scale-x-0 transition-transform duration-500 origin-left group-hover:group-disabled:scale-x-0 group-hover:scale-x-100"></span>
        </button>
      </div>
    </div>
  );
};
export default App;
