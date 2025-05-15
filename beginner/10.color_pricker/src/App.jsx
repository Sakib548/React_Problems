import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorPicker from './ColorPicker'

function App() {

  const defaultColor = "#808080"
  const [color,setColor] = useState(defaultColor);

  return (
    <div style=
    {
      {
        backgroundColor:color,
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "column"
      
      }
    
    
    }
    
    
    >
      <ColorPicker color={color} onChange={setColor}/>
      <button onClick={(e)=>setColor(defaultColor)}>Reset</button>
    </div>
  )
}

export default App;
