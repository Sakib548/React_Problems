import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import ListItem from "./components/ListItem";
import { List } from "react-virtualized";
import { loremIpsum } from "lorem-ipsum";
import VirtualList from "./components/VirtualList";

function App() {
  const totalCount = 5000;
  const rowHeight = 50;
  const visibleCount = 10;
  const buffer = 3;
  const totalHeight = totalCount * rowHeight;

  const data = Array(totalCount)
    .fill()
    .map((val, id) => {
      return {
        id,
        name: "Sakib Hassan",
        image: "https://fakeimg.pl/40x40",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
      };
    });

  return (
    <VirtualList
      data={data}
      rowHeight={rowHeight}
      visibleCount={visibleCount}
      buffer={buffer}
      totalHeight={totalHeight}
    />
  );
}

export default App;
