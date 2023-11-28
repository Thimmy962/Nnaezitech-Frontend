import React, { useEffect, useRef } from 'react'
import GetInTouch from '../Components/GetInTouch'

const Contact = () => {

  const getinTouch = useRef([])

    useEffect(()=>{
        observeButtons()
    }, [])

  const observeButtons = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the button is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('move');
        }
      });
    };

    // Iterate over getinTouch and create Intersection Observers for each button
    getinTouch.current.forEach((divRef) => {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(divRef);
    });
  };

  return (
    <div id='contact-page'>
        <div className="contact">
          <img src="src/assets/Mercedes-Benz-Free-PNG-Image.png" alt="" />
          <div className='contact-word'>
              <div>
                  <div className="contact-us">
                      Contact Us
                  </div>
                  <div className="long-word">
                      Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                      Nulla quis lorem ut libero malesuada feugiat.
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                  </div>
              </div>
          </div>
        </div>

        <div id='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.9239607460398!2d3.336597669497384!3d6.560024931914192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e07116281e3%3A0x7e0473febaaba8be!2s11%20Rafiu%20Cres%2C%20Mafoluku%20Oshodi%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1701165010036!5m2!1sen!2sng" 
        style={{width: "600px", height: "450px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        <div ref={(ref) => (getinTouch.current[0] = ref)}>
            <GetInTouch />
        </div>

    </div>
  )
}

export default Contact