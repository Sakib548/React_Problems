import { useContext, createContext, useState } from "react";
import { userData } from "../data";

const GlobalDataContext = createContext();

export const useData = () => useContext(GlobalDataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(userData);
  const originalData = data;

  return (
    <GlobalDataContext.Provider value={{ data, setData, originalData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
