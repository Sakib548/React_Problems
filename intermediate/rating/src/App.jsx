import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function App() {
  const [rating, setRating] = useState(0);

  const stars = new Array(5).fill(false);

  return (
    <>
      {
        stars.map((star,index)=>(
          <span onClick={()=>setRating(index+1)}> {index<rating?<FaStar />:<CiStar /> }  </span>
        ))
      }
    </>
  )
}

export default App
