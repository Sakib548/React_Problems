import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='accordation'>
       
       <h1>Fonts</h1>
       <button onClick={()=>setIsOpen(!isOpen)}>{isOpen?"Hide":"See"} Details</button>
       
       <p className={`accordation-content ${isOpen?"open":""}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate pariatur unde voluptatum minima dignissimos corr </p>

      </div>
  )
}

export default App
