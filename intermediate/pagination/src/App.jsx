import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)
  
 
   
  let itemsPerPage = 10;

 const startIndex = (currentPage - 1) * itemsPerPage;
 const endIndex = startIndex + itemsPerPage;
 const currentPosts = posts.slice(startIndex,endIndex);

 const totalPage = Math.ceil(posts.length / itemsPerPage);

 const pages = Array.from({length:5},((_,i)=>i+1))
console.log(pages);

 

  useEffect(()=>{
    
    const fetchdata = async()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
      
      
    }
    fetchdata();
  },[])

  const handleClick = (type,index)=>{
    if(type === "Prev" && currentPage!==1){
      setCurrentPage((prev)=>prev-1);
    }else if(type === "Next" && currentPage!==totalPage){
      setCurrentPage((prev)=>prev+1);
    }else if(index>0){
      setCurrentPage(index);
    }
  }
  return (
    <>
     <ul>
     {currentPosts.map((data)=>{
       
       
       return(
        <>
         <Post {...data} key={data.id}/>

        </>
        
       )
       
      }
       

     )}
      
    </ul>

     <div className='pagination'>
        <button  onClick={()=>handleClick("Prev",null)} disabled={currentPage ===1}>Prev</button>
        {
          pages.map((page,index)=>(
            <button key={index}
             className={currentPage===page?"active":""} onClick={()=>handleClick(null,index+1)}>
              {page}
              </button>
          ))
        }
        <button onClick={()=>handleClick("Next",null)} disabled={currentPage ===totalPage}>Next</button>
    </div>
    </>
   
  )
}

export default App
