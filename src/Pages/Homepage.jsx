import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { API_BASE_URL } from '../Components/config';
import GetInTouch from '../Components/GetInTouch';

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
      { threshold: 0.2} // Adjust the threshold as needed
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
      <div className="homepage">
        <div>
          <div className="maintenance">BEST CAR SALES</div>
          <div className="service">Sales</div>
          <div className="nnaezi">
            At Nnaezi, we are committed to earning your trust by providing sales high-quality cars at a fair price
          </div>
          <div className="text-center">
            <Link to="/contact" type="button" className="btn btn-lg btn-danger">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="our-services">
        <div className="services-header">
          <div className="auto-repair">auto repair services</div>

          <div className="wide-range">We Offer A Wide Range Of Services To Help You Get Back On The Road Quickly And Safely.</div>
        </div>

        <div className="services-body">
          <div className="services" ref={(el) => (serviceListRefs.current[0] = el)}>
            <img src="../src/assets/oil.svg" alt="" />
            <p>OIL CHANGES</p>
            <p>Regular oil and filter changes help your engine run smoothly and efficiently.</p>
          </div>

          <div className="services" ref={(el) => (serviceListRefs.current[1] = el)}>
            <img src="../src/assets/brakes.svg" alt="" />
            <p>ABS BRAKES</p>
            <p>Brake maintenance is essential for safe vehicle operation and longevity.</p>
          </div>

          <div className="services third-on-grid" ref={(el) => (serviceListRefs.current[2] = el)}>
            <img src="/src/assets/transmission.svg" alt="transmission" />
            <p>TRANSMISSION SERVICE</p>
            <p>A maintained transmission will extend your vehicle's life and save money.</p>
          </div>
        </div>
      </div>

      <div className="our-products">
          <div className="our-products-inner-div">
                <div className="product-header">
                  <div className="service">OUR PRODUCTS</div>
                    <div className="services-body" style={{height: 'auto'}}>
                          {newInventory?.map((inventory, index) =>(
                            <div key={index} className='inventory'>
                              {inventory.car_image ? <img src={`${API_BASE_URL}${inventory.car_image[0]}`} alt="" lazy = 'true'/>
                              :
                                <img src='../assets/Mercedes-Benz-Free-PNG-Image.png' alt='No Image'/>
                              }
                              <p>{inventory.name}</p>
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
