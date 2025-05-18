import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Search from './components/Search'
import { UserContext } from './context/userContext'

function App() {
  const {data} = useContext(UserContext);

  console.log(data);
  

  return (
    <>
    <Search/>
      {
        data.length === 0 ?
        <p>No Data Found</p>:
        data.map((data,index)=>(
          <h1 key={index}>{data.role}</h1>
        ))
      }
    </>
  )
}

export default App
