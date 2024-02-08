import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { API_BASE_URL } from '../Components/config'
import ImageSlider from '../Components/Carousel'
import GetInTouch from '../Components/GetInTouch'
import {GiGearStick, GiCarSeat} from 'react-icons/gi'
import {FaCar} from 'react-icons/fa'
import {IoColorPalette, IoPricetags} from 'react-icons/io5'
import {IoLogoModelS} from 'react-icons/io'
import {BiCylinder} from 'react-icons/bi'
import { DriveTrain } from '../Components/svgs'
import Loading from '../Components/Loading'


const Detail = () => {
    const param = useParams()
    const id = param.id
    const [car, setCar] = useState(() => {return null})
    const [loading, setLoading] = useState(() => {return false})
    const [error, setError] = useState(() => {return false})
    const [auxilliary, setAuxilliary] = useState(() => {return "Absent"})

    useEffect(()=>{
      setLoading(true)
      setError(false)
      let getCar = async (id) =>{
        let res = await fetch(`${API_BASE_URL}getcar/${id}`, {
          method: "GET",
          headers: {"Content-type": "application/json"}
        })
        if(res.status == 404){
          setError(true)
          setLoading(false)
          return
        }
        let data = await res.json()
        setLoading(false)
        
        
        if (data.auxilliary == true) {
          setAuxilliary("Present");
        }
        setCar(data)
      }
        getCar(id)
    }, [])

    if(loading){
        return (
            <Loading />
        )
    }

    return (
      <div id='detail'>
        {loading ? (
          <div>Loading</div>
        ) : car ? (
          <div className='content'>
                {car.car_image && <ImageSlider images = {car.car_image}/>}
                {car &&
                  <div id='car_info'>
                        <div>
                            <div className='info'>
                                <p className='car_info'><strong>{car.name}</strong></p>
                                <p className='car_attribute'>Name</p>
                            </div>
                        </div>


                       <div>
                            <div className='info'>
                                    <p className='car_info'><strong>{car.make}</strong></p>
                                    <p className='car_attribute'>Make</p>
                                </div>
                       </div>

                        <div>
                            <div className='info'>
                                <p className='car_info'><strong>{car.status}</strong></p>
                                <p className='car_attribute'>Status</p>
                            </div>
                        </div>

                        <div>
                            <div className="icon">
                                <IoPricetags className='info-svg' />
                            </div>
                            <div className='info'>
                                <p className='car_info'><strong>&#8358;{car.price}</strong></p>
                                <p className='car_attribute'>Price</p>
                            </div>
                        </div>

                        <div>
                            <div className="icon">
                                <GiGearStick className='info-svg'/>
                            </div>
                            <div className='info'>
                                <p className='car_info'><strong>{auxilliary}</strong></p>
                                <p className='car_attribute'>Auxilliary Transmission</p>
                            </div>
                        </div>

                        {car.model_year && 
                            <div>
                                <div className="icon">
                                    <IoLogoModelS className='info-svg'/>
                                </div>
                                <div className='info'>
                                    <p className='car_info'><strong>{car.model_year}</strong></p>
                                    <p className='car_attribute'>Year</p>
                                </div>
                            </div>
                        }

                        {car.color &&
                            <div>
                                <div className="icon">
                                    <IoColorPalette className='info-svg'/>
                                </div>
                                <div className='info'>
                                    <p className='car_info'><strong>{car.color}</strong></p>
                                    <p className='car_attribute'>Color</p>
                                </div>
                            </div>
                      }

                      {
                        car.transmission &&
                        <div>
                            <div className="icon">
                                <GiGearStick className='info-svg'/>
                            </div>
                            <div className='info'>
                                <p className='car_info'><strong>{car.transmission}</strong></p>
                                <p className='car_attribute'>Transmission</p>
                            </div>
                      </div>
                      }

                      {
                        car.body &&
                        <div>
                            <div className='icon'>
                                <FaCar className='info-svg'/>
                            </div>
                            <div className='info'>
                                <p className='car_info'><strong>{car.body}</strong></p>
                                <p className='car_attribute'>Body</p>
                            </div>
                      </div>
                      }
                      
                      {
                        car.drive_train && 
                        <div>
                            <div className="icon">
                                <DriveTrain className = 'info-svg'/>
                            </div>
                          <div className="info">
                                <p className='car_info'><strong>{car.drive_train}</strong></p>
                                <p className='car_attribute'>Drvie Train</p>
                          </div>
                      </div>
                      }

                      {
                        car.seats &&
                        <div>
                            <div className="icon">
                                <GiCarSeat className='info-svg'/>
                            </div>
                            <div className="info">
                                    {
                                        car.seats > 1 ? (
                                            <p className='car_info'><strong>{car.seats} seats</strong></p>
                                        )
                                        : 
                                        (
                                            <p className='car_info'><strong>{car.seats} seat</strong></p>
                                        )
                                    }
                                    <p className='car_attribute'>Seats</p>
                            </div>
                      </div>
                      }

                      {
                        car.cylinders && 
                        <div>
                            <div className="icon">
                                <BiCylinder className='info-svg' />
                            </div>
                            <div className="info">
                                <p className='car_info'><strong>{car.cylinders}</strong></p>
                                <p className='car_attribute'>Cylinders</p>
                            </div>
                      </div>
                      }
                    </div>
                }
            </div>
        ) : 
          error && (<div>An Error Occured</div>)  
        }
        <GetInTouch />
      </div>
    );
        }

export default Detail