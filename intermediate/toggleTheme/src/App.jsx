import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false);

  // const handleToggle = ()=>{
  //   setToggle(!toggle);
  //   if(toggle){
  //     document.body.style.background = "black";
  //   }else{
  //     document.body.style.background = "white";
  //   }
  // }

  const handleToggle = ()=>{
    setToggle((prevToggle)=>{
      const newToggle = !prevToggle;
     // document.body.style.background = newToggle ?"black":"white";
      return newToggle;
    })
  }

  useEffect(()=>{
    document.body.className = toggle ?"dark":"light";
  },[toggle])

  return (
    <>
      <button onClick={()=>handleToggle()}>Toggle</button>
    </>
  )
}

export default App
