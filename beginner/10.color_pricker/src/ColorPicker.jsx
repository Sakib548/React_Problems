const ColorPicker = ({color,onChange})=>{
    return (

        <>

          <input type="color" value={color} name="color" onChange={(e)=>onChange(e.target.value)}/>

        </>
    )
    
  
    
}

export default ColorPicker;