import {Link} from 'react-router-dom'

import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade, Zoom, Slide} from 'react-slideshow-image'

const HMPGCarousel = ({slides}) => {

    const divStyle = {
        // height: '600px',
        // color: 'white',
        // textAlign: 'center',
        // display: 'flex',
        // flexDirection:'column',
        // alignItems: 'center',
        // justify

    }

  return (
    <>
      <Slide>
        {
          slides.map((slide, index) => (
            <div key={index} style={{...divStyle, backgroundImage: `url(${slide.url})`}} className='slide'>
                    <div className="maintenance">{slide.title}</div>
                    <div className="service">{slide.contentA}</div>
                    <div className="nnaezi">
                        {slide.contentB}
                    </div>
                    <div className="text-center">
                        <Link to="/listing" type="button" className="btn btn-lg btn-danger">
                        Inventory
                        </Link>
                    </div>
       </div>
          ))
        }
      </Slide>
    </>
  )
}

export default HMPGCarousel