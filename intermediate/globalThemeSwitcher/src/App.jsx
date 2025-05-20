import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useTheme } from "./contexts/themecontext";

function App() {
  const { isDark, setIsDark } = useTheme();

  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          laboriosam perspiciatis ratione saepe distinctio beatae tenetur
          voluptatem pariatur quas autem sunt repellendus enim dolor officiis
          aliquid voluptates? Itaque, consequuntur velit.
        </p>
        <button onClick={() => setIsDark(!isDark)}>Toggle</button>
      </div>
    </>
  );
}

export default App;
