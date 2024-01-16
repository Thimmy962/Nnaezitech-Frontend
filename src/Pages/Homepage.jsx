import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { API_BASE_URL } from '../Components/config';
import GetInTouch from '../Components/GetInTouch';
import HMPGCarousel from '../Components/HMPGCarousel';

const Homepage = () => {
  const [newInventory, setNewInventory] = useState([]);

  const serviceListRefs = useRef([]);

  const getNewInventory = async () => {
    try {
      let res = await fetch(`${API_BASE_URL}getcars/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      let data = await res.json();
      setNewInventory(data);
    } catch (error) {
      console.error('Error fetching new inventory:', error);
    }
  };

  useEffect(() => {
    
    getNewInventory();

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
      { threshold: 0.4}
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

  const slides = [
    {url: '/car-interior.jpg', title:'BEST CAR SALES', contentA: 'Sales', contentB: "At Nnaezi, we are committed to earning your trust by providing sales high-quality cars at a fair price"},
    {url: '/bmw-half.jpg', title: 'Best Car Maintenance Services', contentA: 'Service and Repair', contentB: 'At Nnaezi, we are committed to earning your trust by providing sales high-quality cars at a fair price'},
]

  return (
    <>
      <div className="slider-container">
        <HMPGCarousel slides = {slides}/>
      </div>

      <div className="our-services">
        <div className="services-header">
          <div className="auto-repair">auto repair services</div>

          <div className="wide-range">We Offer A Wide Range Of Services To Help You Get Back On The Road Quickly And Safely.</div>
        </div>

        <div className="services-body">
          <div className="services" ref={(el) => (serviceListRefs.current[0] = el)}>
            <img src="/oil.svg" alt="" />
            <p>OIL CHANGES</p>
            <p>Regular oil and filter changes help your engine run smoothly and efficiently.</p>
          </div>

          <div className="services" ref={(el) => (serviceListRefs.current[1] = el)}>
            <img src="/brakes.svg" alt="" />
            <p>ABS BRAKES</p>
            <p>Brake maintenance is essential for safe vehicle operation and longevity.</p>
          </div>

          <div className="services third-on-grid" ref={(el) => (serviceListRefs.current[2] = el)}>
            <img src="/transmission.svg" alt="transmission" />
            <p>TRANSMISSION SERVICE</p>
            <p>A maintained transmission will extend your vehicle's life and save money.</p>
          </div>
         
          <div className="services third-on-grid" ref={(el) => (serviceListRefs.current[3] = el)}>
            <img src="/AC.svg" alt="A/C" />
            <p>A/C SERVICES</p>
            <p>A maintained transmission will extend your vehicle's life and save money.</p>
          </div>


          <div className="services third-on-grid" ref={(el) => (serviceListRefs.current[4] = el)}>
            <img src="/carwash.svg" alt="Wash and Clean" />
            <p>Wash and Clean</p>
            <p>Keeping your car clean, washing regularly can improve gas mileage, extend paint life</p>
          </div>

          <div className="services third-on-grid" ref={(el) => (serviceListRefs.current[5] = el)}>
            <img src="/engine.svg" alt="Engine Servie" />
            <p>Engine Service</p>
            <p>A well-tuned engine delivers optimal performance and fuel efficiency.</p>
          </div>

        </div>
      </div>

      <div className="our-products">
          <div className="our-products-inner-div">
                <div className="product-header">
                  <div className="service">OUR PRODUCTS</div>
                    <div className="services-body">
                          {newInventory?.map((inventory, index) =>(
                            <div key={index} className='inventory'>
                              {inventory.car_image ? <img src={`${API_BASE_URL}${inventory.car_image[0]}`} alt="" lazy = 'true'/>
                              :
                                <img src='/download.jpeg' alt='No Image'/>
                              }
                                  <p>{inventory.name}</p>
                                  <p className='price'> &#x20A6;{inventory.price}</p>
                                  <div className="text-center">
                                      <Link to={`/detail/${inventory.id}`} className="btn btn-lg btn-outline-danger">
                                          View Detail
                                      </Link>
                                  </div>
                            </div>
                          ))}
                    </div>
                </div>
          </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default Homepage;
