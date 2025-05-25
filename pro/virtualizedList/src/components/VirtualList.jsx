import { useState, useRef } from "react";

const VirtualList = ({
  data,
  rowHeight,
  visibleCount,
  buffer,
  totalHeight,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const containeref = useRef(null);
  const handleScroll = () => {
    const scrollTop = containeref.current.scrollTop;
    const newIndex = Math.floor(scrollTop / rowHeight);
    setStartIndex(newIndex);
  };

  const endIndex = startIndex + visibleCount + buffer;
  const visibleItems = data.slice(startIndex, endIndex);
  return (
    <div
      ref={containeref}
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
                height: `${rowHeight}px`,
                top: `${index * rowHeight}px`,
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
};

export default VirtualList;
