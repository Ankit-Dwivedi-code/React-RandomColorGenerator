import React, {useState} from 'react'

const MyColor = () => {
    const [color, setColor] = useState('#000000')
    const [colorcodehex, setColorcodehex] = useState("#000000")
    const [colorcodergb, setColorcodergb] = useState("")

    const generaterandom = (length)=>{
        return Math.floor(Math.random() * length)
    }

    const handlerandomcolor=()=>{
        let letter = [0, 1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9, "A", "B", "C", "D", "E", "F" ]
        let hex = "#"

        for (let i = 0; i < 6; i++) {
            hex = hex + letter[generaterandom(letter.length)]
            
        }
        setColor(hex)
        console.log(hex);
        setColorcodehex(hex);
        setColorcodergb("")
    }

    function handlergbColor() {
        let r = generaterandom(256)
        let g = generaterandom(256)
        let b = generaterandom(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
        setColorcodergb(`rgb(${r}, ${g}, ${b})`)   
        setColorcodehex("")     
    }
    
  return (
    <div className='container' style={{background : color, height: "100vh",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <button style={{padding: "10px 30px", fontWeight:"bold", backgroundColor:color, color:"white", border:"2px solid", borderRadius:"50px", cursor:"pointer", marginBottom:"20px" }} onClick={handlerandomcolor}>Generate Hex color</button>
      <button style={{padding: "10px 30px", fontWeight:"bold", backgroundColor:color, color:"white", border:"2px solid", borderRadius:"50px", cursor:"pointer",  marginBottom:"20px" }} onClick={handlergbColor}>Generate Rgb color</button>
      <h1 style={{color: "white"}}>Color code is : {colorcodehex} {colorcodergb}</h1>
    </div>
  )
}

export default MyColor
