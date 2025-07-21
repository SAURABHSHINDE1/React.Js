import React, { useState, useEffect } from "react";
import images from "../imagedata.jsx";
import "./carsole.css";

function Carsole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { src: imageSrc, caption: captionText } = images[index];

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={imageSrc} alt={`slide-${index}`} className="carousel-image" />
        <div className="carousel-caption">
          <h2>{captionText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Carsole;