import React, {useState} from "react";


export default function Selector(props) {

    let [colorRed, setColorRed] = useState(0)
    let [colorGreen, setColorGreen] = useState(0)
    let [colorBlue, setColorBlue] = useState(0)

    // props.red = colorRed
    // props.green = colorGreen
    // props.blue = colorBlue


    let handleChangeRed = (e) => {
        
        setColorRed (e.target.value)    
    }

    let handleChangeGreen = (e) => {
        
        setColorGreen (e.target.value)    
    }

    let handleChangeBlue = (e) => {
        
        setColorBlue (e.target.value)    
    }

  return (

    <div className="selector">
      <h1>Selecione sua cor abaixo:</h1>
      R <input type="range" name="red" id="red" min="0" max="255" value={colorRed} onChange={handleChangeRed} red={props.colorRed} /> 
            <input type="text" name="valor" id="valorRed" value={colorRed}/>  
            <br />
      G <input type="range" id="green" min="0" max="255" value={colorGreen} onChange={handleChangeGreen} /> 
            <input type="text" name="valor" id="valorGreen" value={colorGreen}/>  
            <br />
      B <input type="range" id="blue" min="0" max="255" value={colorBlue} onChange={handleChangeBlue} /> 
            <input type="text" name="valor" id="valorBlue" value={colorBlue}/>  
            <br />

    </div>
  );
}
