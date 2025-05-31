import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import ShapeDemo from "./components/ShapeDemo";
// import ColorDemo from "./components/ColorDemo";
// import SizeDemo from "./components/SizeDemo";
import demo from "./utils/Demo";
import importDemo from "./utils/importDemo";

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  async function selectDemo(file) {
    const Demo = await importDemo(file);
    const DemoFile = await (<Demo />);

    setSelectedDemo(DemoFile);
  }

  return (
    <>
      {demo.map((demo) => (
        <button key={demo.id} onClick={() => selectDemo(demo.fileName)}>
          {demo.name}
        </button>
      ))}

      <div>
        <Suspense fallback={<h1>Loading...</h1>}>{selectedDemo}</Suspense>
      </div>

      {/* {type === "Shape" ? (
        <ShapeDemo />
      ) : type === "Color" ? (
        <ColorDemo />
      ) : (
        <SizeDemo />
      )} */}
    </>
  );
}

export default App;
