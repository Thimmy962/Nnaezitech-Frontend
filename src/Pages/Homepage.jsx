import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaArrowRight } from 'react-icons/fa6'
import { useState, useEffect, useRef } from 'react'
import { API_BASE_URL } from '../Components/config'
import GetInTouch from '../Components/GetInTouch'

const Homepage = () => {
  const [newInventory, setNewInventory] = useState()

  const buttonRefs = useRef([]);

  useEffect(() => {
    getNewInventory();
    observeButtons();
  }, []); // Empty dependency array to run the effect only once on mount

  const getNewInventory = async () => {
    let res = await fetch(`${API_BASE_URL}/getcars/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    let data = await res.json();
    setNewInventory(data);
  };

  const observeButtons = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the button is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    // Iterate over buttonRefs and create Intersection Observers for each button
    buttonRefs.current.forEach((buttonRef) => {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(buttonRef);
    });
  };

  return (
    <>
    <div id='homepage'>
        <div id="underlay"></div>
        <div id='beginning'>
            <div>
                  <div id='words'>Purchase and Service Your Car</div>
                  <div id="long">
                      Proin eget tortor risus. Nulla porttitor accumsan tincidunt.
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia auctor sit amet aliquam vel.
                  </div>
                <div id='view-inventory'>
                    <Link to={"/listing"}>
                        <div id="inventory">
                          <p className='inventory-p'>View All Inventroy</p>
                          <p><FaArrowRight /></p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div id="holder">
          <div id="two-colors">
            <div className="content newcars white">
              <h4 className='white'>Brand New Cars</h4>
              <p className='white'>Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque</p>
                <Link to={`listing/new`}>
                    <button ref={(ref) => (buttonRefs.current[0] = ref)}>View New</button>
                </Link>
            </div>

              <div className="content oldcars white">
                  <h4 className='white'>Pre Owned Vehicle</h4>
                  <p className='white'>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Donec velit neque
                  </p>
                  <Link to={`listing/used`}>
                      <button ref={(ref) => (buttonRefs.current[1] = ref)}>View Used</button>
                  </Link>
              </div>
          </div>
    </div>

    <div id='service-list'>
      <div id='service-list-header'>
        Leading Dealer in New & Used Cars
      </div>
      <div id="service-list-container">
          <div className='service-list'>
            <h1>New & Used</h1>
            <p>Consectetur adipiscing elit. Quisque pellentesque viverra quam.</p>
            <Link to="/" ref={(ref) => (buttonRefs.current[2] = ref)}>View Details <FaArrowRight /></Link>
          </div>

          <div className='service-list'>
            <h1>Painting & Body Work</h1>
            <p>Consectetur adipiscing elit. Quisque pellentesque viverra quam.</p>
            <Link to="/" ref={(ref) => (buttonRefs.current[3] = ref)}>View Details <FaArrowRight /></Link>
          </div>

          <div className='service-list'>
            <h1>A C WORK</h1>
            <p>Consectetur adipiscing elit. Quisque pellentesque viverra quam.</p>
            <Link to="/" ref={(ref) => (buttonRefs.current[4] = ref)}>View Details <FaArrowRight /></Link>
          </div>

          <div className='service-list'>
            <h1>Buy, Sell, Swap</h1>
            <p>Consectetur adipiscing elit. Quisque pellentesque viverra quam.</p>
            <Link to="/" ref={(ref) => (buttonRefs.current[5] = ref)}>View Details <FaArrowRight /></Link>
          </div>
      </div>
    </div>

    <div id="new-inventory">
        <div id="service-list-header">
              New Inventory
        </div>

        <div id="inventory-item">
              {
                newInventory ? (
                  newInventory?.map(item => (
                    <div className="item" key={item.id}>
                      {item.car_image && item.car_image.length > 0 ? (
                        <img src={`${API_BASE_URL}/${item.car_image[0]}`} alt={`${item.name}`} className='inventory-image' />
                      ) : (
                        <img src='src/assets/download.jpeg' alt={`${item.name}`} className='inventory-image' />
                      )}
                      <div className="name-detail">
                        <p className='item-name'>{item.name}</p>
                        <Link to={`detail/${item.id}`}>
                          <button className='detail-button'>VIEW DETAIL</button>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <h2>Loading</h2>
                )
              }
        </div>
    </div>
    <GetInTouch />
    </>        
  )
}

export default Homepage