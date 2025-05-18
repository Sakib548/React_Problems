import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

const Search = ()=>{

    const [search,setSearch] = useState("");

    const {data,setData} = useContext(UserContext);
    const [originalData, setOriginalData] = useState([...data]); 

    const handleChange = (e) => {
        const input = e.target.value;
        setSearch(input);
        const newData = originalData.filter((item) =>
          input.length === 0 ? true : item.role.toLowerCase().includes(input.toLowerCase())
        );
        setData(newData);
      };
      

    return <input type="text" value={search} onChange={handleChange}/>
}

export default Search;