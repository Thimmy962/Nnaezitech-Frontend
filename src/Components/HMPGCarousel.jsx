import {Link} from 'react-router-dom'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image'

const HMPGCarousel = ({slides}) => {

  return (
    <>
      <Fade>
        {
          slides.map((slide, index) => (
            <div key={index} style={{backgroundImage: `url(${slide.url})`}} className='slide'>
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
      </Fade>
    </>
  )
}

export default HMPGCarousel