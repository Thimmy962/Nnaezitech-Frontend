import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { API_BASE_URL } from './config';
import { Link } from 'react-router-dom';

const ImageSlider = ({images}) => {
  return (
    <Carousel>
      {
        images.map((image, index) =>(
          <Carousel.Item key={index}>
              <div className="d-flex justify-content-center align-items-center" >
              <Link to={`${API_BASE_URL}${image}`}>
                  <img src={`${API_BASE_URL}${image}`} className='carousel-img inventory-image'/>
              </Link>
              </div>
      </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default ImageSlider;
