import React from "react";

const InsideScene = ({ goTo }) => {
  return (
    <div className="bg-red-500">
      {" "}
      <h1 className="text-5xl text-white text-center">
        We are currently Inside the house
      </h1>
      <div
        className="mt-24 cursor-pointer bg-cyan-300 rounded-xl p-3 text-xl text-center"
        onClick={() => {
          goTo("outside");
        }}
      >
        Click this to go Outside
      </div>
    </div>
  );
};

export default InsideScene;
