import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const defaultState ={
    name:"",email:"",phoneNumber:"",
    street:"",city:"",state:"",zipcode:"",
    facebook:""
  }
  const [formDetails,setFormDetails] = useState(defaultState);
 
  const [step,setSteps] = useState(1);
  
  const handleForm = (e)=>{
    e.preventDefault();
    console.log(formDetails);
    setSteps(4);
    setFormDetails(defaultState);
    
  }

  const handleChange = (e)=>{
    setFormDetails({...formDetails,[e.target.name]:e.target.value})
  }
  

  return (
    <>
    {
      step === 1 &&
      <form onSubmit={(e)=> {e.preventDefault();setSteps(2);} }>
        <h1 style={{textAlign:"center"}}>Personal Details</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formDetails.name} onChange={handleChange} required/>
        <label htmlFor="name">Email</label>
        <input type="email" name="email" value={formDetails.email} onChange={handleChange}required/>
        <label htmlFor="name">Phone Number</label>
        <input type="text" name="phoneNumber" value={formDetails.phoneNumber} onChange={handleChange} required/>
        
        <button type="submit">Next Step</button>
      </form>
    }

{
      step === 2 &&
      <form onSubmit={(e)=> {e.preventDefault();setSteps(3);} }>
        <h1 style={{textAlign:"center"}}>Address</h1>
        <label htmlFor="name">Street</label>
        <input type="text" name="street" value={formDetails.street} onChange={handleChange} required/>
        <label htmlFor="city">City</label>
        <input type="text" name="city" value={formDetails.city} onChange={handleChange} required/>
        <label htmlFor="state">State</label>
        <input type="text" name="state" value={formDetails.state} onChange={handleChange} required/>
        <label htmlFor="state">Zip Code</label>
        <input type="text" name="zipcode" value={formDetails.zipcode} onChange={handleChange} required/>
        <button type="button" onClick={()=>setSteps(step-1)}>Previous Step</button>
        <button type="submit">Next Step</button>
      </form>
    }

{
      step === 3 &&
      <form onSubmit={handleForm}>
        <h1 style={{textAlign:"center"}}>Socials</h1>
        <label htmlFor="name">Facebook</label>
        <input type="text" name="facebook" value={formDetails.facebook} onChange={handleChange} required/>
        <button type="button" onClick={()=>setSteps(step-1)}>Previous Step</button>
        <button type="submit">Next Step</button>
      </form>
    }
      
      {
        step == 4 &&
        <h1>Thanks for submitting the Form</h1>
      }
    </>
  )
}

export default App
