import React, { useState, useEffect } from "react";
import { CarouselBullet, CarouselBulletWhite } from "./svgs";
import {Link} from 'react-router-dom'

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


  return (
    <div className="HMPG">
        <div style={styles} className="carousel-div homepage">
           <div>
                <div className="maintenance">{slides[currentIndex].title}</div>
                <div className="service">{slides[currentIndex].contentA}</div>
                <div className="nnaezi">
                    {slides[currentIndex].contentB}
                </div>
                <div className="text-center">
                    <Link to="/listing" type="button" className="btn btn-lg btn-danger">
                    Inventory
                    </Link>
                </div>
           </div>
        </div>
        <div className="bullet">
        {slides.map((slide, index) => (
                index === currentIndex ?
                (<div key={index} className="carousel-bullet" onClick = {() => setCurrentIndex(index)}><CarouselBulletWhite /></div>)

                :
                (<div key={index} className="carousel-bullet" onClick = {() => setCurrentIndex(index)}><CarouselBullet /></div>)
            ))}
        </div>
    </div>
  );
};

export default HMPGCarousel;