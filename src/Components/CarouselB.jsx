import React, { useState, useEffect } from 'react';

const CarouselB = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  const slides = [
    'https://media.geeksforgeeks.org/img-practice/banner/mern-full-stack-development-classroom-thumbnail.png?v=19625',
    'https://media.geeksforgeeks.org/img-practice/banner/dsa-to-development-coding-guide-thumbnail.png?v=19625',
    'https://media.geeksforgeeks.org/img-practice/banner/geeks-classes-live-thumbnail.png?v=19625',
    'https://media.geeksforgeeks.org/img-practice/banner/gate-crash-course-2024-thumbnail.png?v=19625',
  ];

  return (
    <div className="body">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
          >
            <div className="slide-image" style={{ backgroundImage: `url('${slide}')` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselB;
