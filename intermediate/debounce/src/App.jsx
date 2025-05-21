import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useData } from "./contexts/dataContext";
import Search from "./components/Search";

function App() {
  const { data } = useData();

  return (
    <>
      <Search />
      {data.map((data) => {
        const { id, name, role, email } = data;
        return (
          <p key={id}>
            {name}- {role}
          </p>
        );
      })}
    </>
  );
}

export default App;
