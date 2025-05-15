import { useState } from 'react'


const AddTask = ({addTask})=>{

    const [name,setName] = useState("")
    return(
        <>
             <input value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
             <button onClick={()=>addTask(name)}>Add Task</button>
        </>
   
    )
    
}

export default AddTask;