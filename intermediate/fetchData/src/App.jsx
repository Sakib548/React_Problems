import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setData(data);
    }

    fetchData()
  },[])

  return (
    <>
      {
        data.map((data)=>(
          <h1>{data.title}</h1>
        ))
      }
    </>
  )
}

export default App
