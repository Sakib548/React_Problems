import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const [isPaused,setIspaused] = useState(false);
  const [isStarted,setIsStarted] = useState(false);

  useEffect(()=>{
    let interval;
    if(!isPaused && isStarted){
       interval = setInterval(()=>{
        setTimer((timer)=>timer+10)
      },10)
     }
     else{
      clearInterval(interval)
     }
    
     return (()=>{
      clearInterval(interval)
     })
    
  },[isPaused,isStarted])

  const handleStart = ()=>{
    setIsStarted(true);
    setIspaused(false);
  }

  const handlePause = ()=>{
    
    setIspaused(!isPaused);
  }

  const handleReset = ()=>{
    setIsStarted(false);
    setTimer(0);
  }

  const formatTime = (timer)=>{
    const minutes = Math.floor((timer / 60000) % 60);
    const seconds = Math.floor((timer / 1000) % 60);
    const milliseconds = Math.floor((timer % 1000) / 10);

    const pad = (num)=> String(num).padStart(2,"0");

    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`

  }

  return (
    <>
    <h1>Time {formatTime(timer)}</h1>
      <button onClick={()=>handleStart()} >Start</button>
      <button onClick={()=>handlePause()} >Pause</button>
      <button onClick={()=>handleReset()} >Reset</button>
    </>
  )
}

export default App
