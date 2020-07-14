import React, { useState } from "react";

export default function Selector() {
  let [color, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  let handleChangeRed = (e) => {
    setColor(( color.red = { ...color, red:  e.target.value }));
  };
  let handleChangeGreen = (e) => {
    setColor(( color.green = { ...color, green:  e.target.value }));
  };
  let handleChangeBlue = (e) => {
    setColor(( color.blue = { ...color, blue:  e.target.value }));
  };

  return (
    <div className="selector">
      <h1>RGB COLOR CHANGER</h1>
      <div
        className="box"
        style={{
          backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
        }}
      />
      <h1>Selecione sua cor abaixo:</h1>R{" "}
      <input
        type="range"
        name="red"
        id="red"
        min="0"
        max="255"
        value={color.red}
        onChange={handleChangeRed}
      />
      <input type="text" name="valor" id="valorRed" value={color.red} />
      <br />G{" "}
      <input
        type="range"
        id="green"
        min="0"
        max="255"
        value={color.green}
        onChange={handleChangeGreen}
      />
      <input type="text" name="valor" id="valorGreen" value={color.green} />
      <br />B{" "}
      <input
        type="range"
        id="blue"
        min="0"
        max="255"
        value={color.blue}
        onChange={handleChangeBlue}
      />
      <input type="text" name="valor" id="valorBlue" value={color.blue} />
      <br />
    </div>
  );
}
