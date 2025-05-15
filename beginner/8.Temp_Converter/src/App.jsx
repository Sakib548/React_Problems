import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [cel, setCel] = useState("")
  const [fah, setFah] = useState("");


  const toFahrenhite = (value)=>{

    value = Number(value);
    let result = ((value * 9)/5)+32;
    setFah(result);
  }

  return (
    <>
     Enter your temp in celcius <label htmlFor="cel"/>
     <input name={cel} value={cel} onChange={(e)=>setCel(e.target.value)}/>
     <button onClick={()=>toFahrenhite(cel)}>Convert</button>
      <p>Your temperature in Fahrenhite is {fah}</p>
    </>
  )
}

export default App
