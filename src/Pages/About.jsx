import React, { useEffect, useRef } from 'react'
import GetInTouch from '../Components/GetInTouch'


const About = () => {

    const serviceListRefs = useRef([]);

    useEffect(() => {    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('show');
              } else {
                entry.target.classList.remove('show');
              }
            });
          },
          { threshold: 0.5}
        );
    
        serviceListRefs.current.forEach((ref) => {
          if (ref) {
            observer.observe(ref);
          }
        });
    
    
        return () => {
          serviceListRefs.current.forEach((ref) => {
            if (ref) {
              observer.unobserve(ref);
            }
          });
          // observer.disconnect();
        };
      }, []);
    

  return (
    <>
        <div className='about-top'>
            <div className='about-top-inner-1'>
                <img src="/Mercedes-Benz-sedan-black.png" alt=""/>
            </div>
            <div className="about-top-inner-2">
                <div className='text-center'>
                    <div>About US</div>
                    <div>Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh.
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubil
                        ia Curae; Donec velit neque, auctor sit amet aliquam
                    </div>
                </div>
            </div>
        </div>

        <div className='about-div-2' ref={(el) => (serviceListRefs.current[0] = el)}>

            <div>
                A Leading Car Dealer For Over 30 Years
            </div>
            
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lobortis justo, ut iaculis nulla. Donec varius magna ut turpis luctus aliquet. Nulla mauris eros, molestie non commodo eget, molestie ut nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor augue nibh, ut molestie tortor interdum vel. 
                Aenean volutpat ultrices eros, non sodales lectus ultrices eu.
                </p>

                <p>
                Nullam scelerisque arcu lacus, at porttitor ex vestibulum semper. Phasellus luctus luctus facilisis.
                Vestibulum auctor ante velit, at sollicitudin tellus placerat qui.
                </p>
            </div>

        </div>
        <div className='about-div-3'>
                <div className="our-team">
                    Our Team
                </div>

                <div className="people">
                    <div className="human" ref={(el) => (serviceListRefs.current[1] = el)}>
                        <div className="image">
                                <img src="/Mercedes-Benz-sedan-black.png" alt="" className='human-img'/>
                        </div>
                        <div className="info">
                            <p className="name">John Harrison</p>
                            <p className="position">Co-Founder</p>
                        </div>
                    </div>

                    <div className="human" ref={(el) => (serviceListRefs.current[2] = el)}>
                        <div className="image">
                            <img src="/Mercedes-Benz-sedan-black.png" alt="" className='human-img'/>
                        </div>
                        <div className="info">
                            <p className="name">John Harrison</p>
                            <p className="position">Co-Founder</p>
                        </div>
                    </div>

                    <div className="human" ref={(el) => (serviceListRefs.current[3] = el)}>
                        <div className="image">
                            <img src="/Mercedes-Benz-sedan-black.png" alt="" className='human-img'/>
                        </div>
                        <div className="info">
                            <p className="name">John Harrison</p>
                            <p className="position">Head of Sales</p>
                        </div>
                    </div>
                </div>
        </div>
        <GetInTouch />
    </>
  )
}

export default About