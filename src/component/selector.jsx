import React, { useState } from "react";

export default function Selector() {
  let [colors, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const availableColors = Object.keys(colors)

  let handleChange = (color) => {
    return event => {
      const {value} = event.target
    
    setColor({ ...colors, [color]:value });
    }
  }
  
  return (
    <div className="selector">
      <h1>RGB COLOR CHANGER</h1>
      <div
        className="box"
        style={{
          backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
        }}
      />
      <h1>Selecione sua cor abaixo:</h1>
      {availableColors.map(color =>(
      <div className="ranges">
      <label className="label" >{color.toLocaleUpperCase()}</label>
      <input
        
        key={color}
        type="range"
        name={color}
        id={color}
        min="0"
        max="255"
        value={color[color]}
        onChange={handleChange(color)}
      />
      <br></br>
      </div>
      ))}
      
      
    </div>
  );
}
