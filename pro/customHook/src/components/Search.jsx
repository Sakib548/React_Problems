import { useEffect, useState } from "react";
import { useData } from "../contexts/dataContext";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const { setData, data } = useData();
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 500);

  const [originalData, setOriginallData] = useState([...data]);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(input);
  };

  useEffect(() => {
    const newData = originalData.filter((item) =>
      item.role.toLowerCase().includes(debounceSearch.toLowerCase())
    );
    setData(newData);
  }, [debounceSearch]);

  return <input type="text" value={search} onChange={handleChange} />;
};

export default Search;
