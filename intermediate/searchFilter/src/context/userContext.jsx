import { useState,useEffect,useContext,createContext } from "react";
import { userData } from "../data";

export const UserContext = createContext();



export const UserProvider = ({children})=>{

    const [data,setData] = useState(userData);
   /// const originalData = [...data];

   return (
    <UserContext.Provider value={{data,setData}}>
      {children}
    </UserContext.Provider>
   )
    
}