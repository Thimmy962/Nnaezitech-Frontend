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
          { threshold: 0.2}
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
          observer.disconnect();
        };
      }, []);
    

  return (
    <>
        <div className='about-top'>
            <div className="about-top-inner-2">
                <div className='text-center'>
                    <div>About US</div>
                </div>
            </div>
        </div>

        <div className='about-div-2' ref={(el) => (serviceListRefs.current[0] = el)}>
            
            <div>
                  <div id='overview'>
                    <div className="overview-inner-1">
                        <div className="overview-header">
                          Company Overview
                        </div>
                        <p>
                        Nnaezitech Enterprises is a budding car service center and repair shop that offers a range of car repair services and also retails car parts to car owners around Mafoluku Oshodi, Lagos State.
                        We are in the passionate and constant pursuit of excellence and also a financial success, this entails why we are in the automobile service repair scene.
                        </p>

                        <p>
                        We have it in our plans to foster the establishment to lofty heights and grow our sales exponentially every year.
                        This will be achieved by having trusted clients and maintaining transparency and trust when we execute our services.
                        </p>

                        <p>
                        We seek to differ and we will ensure this in the method and conduct we incorporate when executing our services, we aim to carry out hassle-free, fast, and the best auto repair service in the whole of Lagos. 
                        This will be achieved by employing several hands, at least two, to each bay and providing up to 10 bays or repair stations in the premises where mechanics can work on up to 10 cars at once.
                        </p>
                    </div>
                    <div className="overview-inner-2">
                      <img src="" alt="Happy" className='about-img'/>
                    </div>
                  </div>

                  <div id='philosophy'>
                      <div className="philosophy-inner-1">
                          <div className="philosophy-header">
                              Our Mission
                          </div>

                          <ul className='about-ul'>
                            <li><span className='about-span'>&raquo;</span>To provide an atmosphere where the consumer 
                                feels confident about his/her purchase(s) and relationships with Nnaezitech Enterprises service employees.
                              </li>
                              <li><span className='about-span'>&raquo;</span>Being honest and sincere with the clientele.</li>
                              <li><span className='about-span'>&raquo;</span>Being community oriented.</li>
                              <li><span className='about-span'>&raquo;</span>To create a place where customers feel good about recommending Nnaezitech Enterprises to friends or relatives for their auto concerns. </li>
                              <li><span className='about-span'>&raquo;</span>To provide a comfortable living for ourselves and our employees.</li>
                              <li><span className='about-span'>&raquo;</span>To provide a healthy work environment where our employees enjoy coming to work each day.</li>
                              <li><span className='about-span'>&raquo;</span>To provide benefits for ourselves, our employees and families.</li>
                              <li><span className='about-span'>&raquo;</span>Our goal is to keep our employees long term by treating them as we would wish to be    treated ourselves.</li>
                      
                          </ul>
                    </div>

                    <div className="philosophy-inner-2">
                        <img src="/happywoman.jpg" alt="Happy" className='about-img'/>
                    </div>
                  </div>
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