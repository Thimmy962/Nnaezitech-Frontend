import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { API_BASE_URL } from '../Components/config'
import ImageSlider from '../Components/Carousel'
import GetInTouch from '../Components/GetInTouch'


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
          console.log(await json(res))
          return
        }
        let data = await res.json()
        setLoading(false)
        
        
        if (data.auxilliary == true) {
          setAuxilliary("Present");
        }
        setCar(data)
        console.log(data)
      }
        getCar(id)
    }, [])
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
                            <p className='car_info'><strong>{car.name}</strong></p>
                            <p className='car_attribute'>Name</p>
                        </div>

                        <div>
                            <p className='car_info'><strong>&#8358;{car.price}</strong></p>
                            <p className='car_attribute'>Price</p>
                        </div>

                        <div>
                            <p className='car_info'><strong>{car.make}</strong></p>
                            <p className='car_attribute'>Make</p>
                        </div>

                        <div>
                            <p className='car_info'><strong>{car.status}</strong></p>
                            <p className='car_attribute'>Status</p>
                        </div>

                        <div>
                          <p className='car_info'><strong>{auxilliary}</strong></p>
                          <p className='car_attribute'>Auxilliary Transmission</p>
                        </div>

                        {car.model_year && 
                        <div>
                          <p className='car_info'><strong>{car.model_year}</strong></p>
                          <p className='car_attribute'>Year</p>
                        </div>
                        }

                        {car.color &&
                          <div>
                            <p className='car_info'><strong>{car.color}</strong></p>
                            <p className='car_attribute'>Color</p>
                        </div>
                      }

                      {
                        car.transmission &&
                        <div>
                          <p className='car_info'><strong>{car.transmission}</strong></p>
                          <p className='car_attribute'>Transmission</p>
                      </div>
                      }

                      {
                        car.body &&
                        <div>
                          <p className='car_info'><strong>{car.body}</strong></p>
                          <p className='car_attribute'>Body</p>
                      </div>
                      }

                      {
                        car.drive_train && 
                        <div>
                          <p className='car_info'><strong>{car.drive_train}</strong></p>
                          <p className='car_attribute'>Drvie Train</p>
                      </div>
                      }

                      {
                        car.seats &&
                        <div>
                          <p className='car_info'><strong>{car.seats} seats</strong></p>
                          <p className='car_attribute'>Seats</p>
                      </div>
                      }

                      {
                        car.cylinders && 
                        <div>
                          <p className='car_info'><strong>{car.cylinders}</strong></p>
                          <p className='car_attribute'>Cylinders</p>
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