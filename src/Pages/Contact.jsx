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
          <img src="/Mercedes-Benz-Free-PNG-Image.png" alt="" />
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.7354442044383!2d3.3334688!3d6.5510609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e0c0108723f%3A0x482c176a4e75052!2sAirport%20Cl%2C%20Orile%20Oshodi%2C%20Mafoluku%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1706460973162!5m2!1sen!2sng" 
          style={{width:"600px", height:"450px", border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
        
        <div ref={(ref) => (getinTouch.current[0] = ref)}>
            <GetInTouch />
        </div>

    </div>
  )
}

export default Contact
