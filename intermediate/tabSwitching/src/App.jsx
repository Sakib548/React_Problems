import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Privacy from './components/Privacy';
import Settings from './components/Settings';
import Home from './components/Home';

function App() {
  const [tab, setTab] = useState("Home");

  const handleClick = (e)=>{
   
    setTab(e.target.textContent)

  }

  return (
    <>
     <button   onClick={handleClick} className={tab === "Home" ? "button active" : "button"}>Home</button>
     <button   onClick={handleClick} className={tab === "Settings" ? "button active" : "button"}>Settings</button>
     <button   onClick={handleClick} className={tab === "Privacy" ? "button active" : "button"}>Privacy</button>

     {
      tab === "Home"?<Home/>:(tab==="Settings")?<Settings/>:<Privacy/>
     }

    </>
  )
}

export default App
