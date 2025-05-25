import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import ListItem from "./components/ListItem";
import { List } from "react-virtualized";
import { loremIpsum } from "lorem-ipsum";

function App() {
  const rowHeight = 50;
  const visibleCount = 15;
  const buffer = 3;
  const totalCount = 5000;
  const totalHeight = rowHeight * totalCount;

  //const data = Array.from({ length: totalCount }, (_, i) => `Row ${i + 1}`);

  const data = Array(totalCount)
    .fill()
    .map((val, id) => {
      return {
        id,
        name: "Sakib Hassan",
        image: "http://via.placeholder.com/40",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
      };
    });
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop;
    const newStart = Math.floor(scrollTop / rowHeight);
    setStartIndex(newStart);
  };

  const endIndex = startIndex + visibleCount + buffer;
  const visibleItems = data.slice(startIndex, endIndex);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: `${visibleCount * rowHeight}px`,
        overflowY: "auto",
        position: "relative",
        border: "1px solid #ccc",
      }}
    >
      <div style={{ height: `${totalHeight}px`, position: "relative" }}>
        {visibleItems.map((item, i) => {
          const index = startIndex + i;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${index * rowHeight}px`,
                height: `${rowHeight}px`,
                width: "100%",
                borderBottom: "1px solid #eee",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
