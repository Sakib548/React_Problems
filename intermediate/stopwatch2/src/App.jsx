import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const hasStarted = ()=>{
    setIsStarted(true);
    setIsPaused(false);
  }

  const hasPaused = ()=>{
    
    setIsPaused(!isPaused);
  }

  const hasReset =()=>{
    setIsStarted(false);
    setTimer(0);
  }


  const formatTime = (timer)=>{
    const minutes = Math.floor((timer / 60000)/60 % 60);
    const seconds = Math.floor((timer/1000)%60);
    const milliseconds = Math.floor((timer%1000)/10);

    const pad = (num) => String(num).padStart(2,"0");

    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`
    
  }

  useEffect(()=>{
    let intervel;
    if(isStarted && !isPaused){
      intervel = setInterval(() => {
        setTimer((time)=>time+10);
      }, 10);
    }else{
      clearInterval(intervel);
    }

    return (()=>{
      clearInterval(intervel);
    })

  },[isStarted,isPaused])

 

  return (
    <>
      
      <p>{formatTime(timer)}</p>
      <button onClick={()=>hasStarted()}>Start</button>
      <button onClick={()=>hasPaused()}>Pause</button>
      <button onClick={()=>hasReset()}>Reset</button>

      
    </>
  )
}

export default App
