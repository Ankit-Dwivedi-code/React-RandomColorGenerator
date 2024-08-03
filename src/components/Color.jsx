import React, { useState, useEffect } from "react";

const Color = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  function handlecreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)]
        
    }
    console.log(hexColor);
    setColor(hexColor)
  }
  function handlecreateRandomRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    if(typeOfColor === "rgb"){
        handlecreateRandomRgbColor()
    }else{
        handlecreateRandomHexColor()
    }
  
    
  }, [typeOfColor])
  

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handlecreateRandomHexColor
            : handlecreateRandomRgbColor
        }
      >
        Generate random color
      </button>
      <div style={{display: "flex" , justifyContent: "center" , alignItems: "center", color: "white", fontSize:"60px", marginTop:"50px"}}>
            <h3>{typeOfColor === 'rgb' ? 'RGB Color: ' : 'HEX Color: '}</h3>
            <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Color;
