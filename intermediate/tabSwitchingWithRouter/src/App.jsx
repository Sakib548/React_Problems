import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import Privacy from "./pages/Privacy"


import {Routes,Route} from 'react-router';
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
    </Routes>
    
    </>
   
  )
}

export default App
