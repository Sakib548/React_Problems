import { useState } from 'react'

import './App.css'

function App() {
  const [isActive, setisActive] = useState(false)

  return (
    <>
      {isActive && <h1>Active</h1>}
      <button onClick={()=>setisActive(!isActive)}>Toggle</button>
    </>
  )
}

export default App
