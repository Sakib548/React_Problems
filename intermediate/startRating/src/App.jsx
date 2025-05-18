import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function App() {

  const start = new Array(5).fill(false);
  const [rating, setRating] = useState(0)


  const handleStarClick = (index)=>{
    
    setRating(index+1);
    
  }
  

  return (
    <div>
       <p>Lorem ipsum dolor sit amet.</p>
       <p>price:54$</p><br/>
       
       {
         start.map((star,index)=>(
           <span key={index} onClick={()=>handleStarClick(index)}> {index<rating?<FaStar />:<CiStar />}</span>
         ))
       }
       
        

    </div>
  )
}

export default App
