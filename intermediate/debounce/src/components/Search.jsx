import { useEffect, useState } from "react";
import { useData } from "../contexts/dataContext";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const { setData, data } = useData();
  const [search, setSearch] = useState("");

  const [originalData, setOriginalData] = useState([...data]);
  const debounceSearch = useDebounce(search, 500);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(input);
  };

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     const newData = originalData.filter((item) =>
  //       // input.length === 0
  //       //   ? true
  //       //   :
  //       item.role.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setData(newData);
  //   }, 500);

  //   return () => clearTimeout(timeOut);
  // }, [search]);

  useEffect(() => {
    const newData = originalData.filter((item) =>
      item.role.toLowerCase().includes(debounceSearch.toLowerCase())
    );
    setData(newData);
  }, [debounceSearch]);
  return <input type="text" value={search} onChange={handleChange} />;
};

export default Search;
