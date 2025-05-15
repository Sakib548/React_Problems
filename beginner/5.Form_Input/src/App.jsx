import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")

  return (
    <>
      Name:<span>{name}</span>
      <label htmlFor="name"/>
      <input value={name} name="name" onChange={(e)=>setName(e.target.value)} />
       
    </>
  )
}

export default App
