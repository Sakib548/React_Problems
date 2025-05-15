import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isTrue, setIsTrue] = useState(false)

  return (
    <>
      {isTrue ? <p>True</p>:<p>False</p>}
      <button onClick={()=>setIsTrue(!isTrue)}>Toggle</button>
    </>
  )
}

export default App
