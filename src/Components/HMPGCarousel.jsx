import React, { useState, useEffect } from "react";
import { LeftArrow, RightArrow,CarouselBullet } from "./svgs";

const HMPGCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const styles = {
    width: "100%",
    backgroundImage: `url(${slides[currentIndex].url})`,
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }

  const goToPrevious = () =>{
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)

  }

  const goToNext = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)

  }

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);


    return () => clearInterval(intervalId);
  }, [currentIndex]);


  return (
    <div className="HMPG">
        <div className="arrows left" onClick={goToPrevious}><LeftArrow  /></div>
        <div className="arrows right" onClick={goToNext}><RightArrow /></div>
        <div style={styles} className="carousel-div"> <h2>{slides[currentIndex].title}</h2></div>
        <div className="bullet">
        {slides.map((slide, index) => (
                <div key={index} className="carousel-bullet" onClick = {() => setCurrentIndex(index)}><CarouselBullet /></div>
            ))}
        </div>
    </div>
  );
};

export default HMPGCarousel;