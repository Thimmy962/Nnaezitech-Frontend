import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import { MEDIA_BASE_URL } from './config';
import { Link } from 'react-router-dom';

const ImageSlider = ({images}) => {
  return (
    <Slide>
      {
        images.map((image, index) =>(
          <div key={index} className="slide" id='caro'>
              <div>
                <Link to={`${MEDIA_BASE_URL}${image}`}>
                    <img src={`${MEDIA_BASE_URL}${image}`} className='carousel-img inventory-image'/>
                </Link>
              </div>
      </div>
        ))
      }
    </Slide>
  );
}

export default ImageSlider;