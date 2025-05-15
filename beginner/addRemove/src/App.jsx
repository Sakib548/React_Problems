import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nanoid } from 'nanoid'
import AddTask from './components/AddTask'

const dailyTasks = [
  {
    id:1,
    name:"walk"
  },
  {
    id:2,
    name:"Run"
  }
]



function App() {
  const [tasks, setTasks] = useState(dailyTasks)


  const addTasks = (name)=>{
    console.log("Task",name);
    
    setTasks([...tasks,{
      id:nanoid(),
      name,

    }])

   
   
    
  }


  const removeTask = (id)=>{
       setTasks(tasks.filter((task)=>task.id!==id));
  }


  return (
    <>
      {
        tasks.map((task)=>{
          const {id,name} = task;
          return (
           
              <p key={id}>{name} <button onClick={()=>removeTask(id)}>Remove</button></p>
              
           
          )
        })
      }
      <AddTask addTask={addTasks}/>
    </>
  )
}

export default App
