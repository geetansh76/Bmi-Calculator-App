import logo from "./logo.svg";
import "./App.css";
import React, { useState,useMemo } from "react";

function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }
  function onHeightChange(event) {
    setHeight(event.target.value);
  }
  // we use usememo hook for optimize the performance and speef of our application


   const output=useMemo(()=>
  {
    const calculateHeight=height/100;

    return (weight/(calculateHeight*calculateHeight)).toFixed(1)

  },[weight,height])



  return (
    <main>
      <h1>BMI-Calculator-App</h1>

      {/* Taking for inputs  */}
      <div className="input-section">
        <p className="slider-output">Weight :{weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="30"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">Height :{height} cm</p>
        <input
          className="input-slider"
          type="range"
          onChange={onHeightChange}
          min="140"
          max="220"
        />
      </div>

      {/* Display all outputs */}
      <div className="output-section">
        <p> Your BMI is </p>
        <p className="output"> {output}</p>
      </div>
    </main>
  );
}
export default App;
