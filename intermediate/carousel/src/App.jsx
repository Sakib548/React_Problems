import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const randomimages = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1041/600/400",
  "https://picsum.photos/id/1045/600/400",
  "https://picsum.photos/id/1052/600/400",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(randomimages);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const ImageLength = images.length;

  useEffect(() => {
    if (isPaused) return;
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === ImageLength - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isPlaying]);

  const handleClick = (type) => {
    if (type === "Next") {
      setCurrentIndex((prev) => (prev === ImageLength - 1 ? 0 : prev + 1));
    } else {
      //  setCurrentIndex((prev)=>prev-1);
      setCurrentIndex((prev) => (prev === 0 ? ImageLength - 1 : prev - 1));
    }
  };

  return (
    <div
      className="carousel-track"
      style={{
        width: "600px",
        maxHeight: "400px",
        position: "relative",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* <button className={`left-arrow ${currentIndex ===0 ?"hidden":""}`} onClick={()=>handleClick("Prev")}><FaArrowLeft/></button> */}
      <button className={`left-arrow`} onClick={() => handleClick("Prev")}>
        <FaArrowLeft />
      </button>
      {images.map((image, index) => (
        <img
          src={image}
          key={image}
          className={`carousel-slide ${currentIndex !== index ? "hidden" : ""}`}
          alt={`Slides ${index + 1}`}
        />
      ))}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button className={`right-arrow`} onClick={() => handleClick("Next")}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default App;
