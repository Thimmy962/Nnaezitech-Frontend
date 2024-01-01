// import React, { useState } from 'react'
// import { API_BASE_URL } from './config'
// import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa' 

// const ImageSlider = ({images}) =>{

//   const [current, setCurrent] = useState(0)
//   const length = images.length

//   const nextSlide = () =>{
//     setCurrent(current === length - 1 ? 0 : current + 1)
//     const div = document.querySelector('.slide')
//     if(div.classList.contains('left')){
//       div.classList.remove('left')
//       div.classList.add('right')
//       console.log(div.classList)

//     }
//     else if(!div.classList.contains('left')){
//       div.classList.add('right')
//       console.log(div.classList)

//     }
//   }

//   const previousSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1)
//     const div = document.querySelector('.slide')
//     if(div.classList.contains('right')){
//       div.classList.remove('right')
//       div.classList.add('left')
//       console.log(div.classList)
//     }
//     else{
//       div.classList.add('left')
//             console.log(div.classList)

//     }
//   }

//   return(
//     <>
//       <div className="carousel-slider">
//         <FaArrowAltCircleLeft className='left-arrow arrows' onClick={previousSlide}/>
//         <FaArrowAltCircleRight className='right-arrow arrows' onClick={nextSlide}/>
//                 {images.map((image, index) =>
//                     {                      
//                        return (
//                         <div className={index ===current ? 'slide active' : 'slide'} key={index}>
//                           {index === current && <img src={`${image}`} className='carousel-image' /> }
//                         </div>
//                        )

//                     } )
//                   }
//       </div>
//     </>
//   )
// }

// export default ImageSlider

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
              <Link to={`${API_BASE_URL}/${image}`}>
                  <img src={`${API_BASE_URL}/${image}`} className='carousel-img'/>
              </Link>
              </div>
      </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default ImageSlider;
