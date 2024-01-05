import React, { useState } from 'react'
import {API_BASE_URL} from './config'
import { Link } from 'react-router-dom'

const GetInTouch = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState("")
  const body ={
    "name": name,
    "phone": phone,
    "mail": mail,
    "message": message
  }

  const submit = async (e) =>{
    e.preventDefault()
    let res = await fetch(`${API_BASE_URL}/new_message`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
    let data = await res.json()
    console.log(data)
    setName(""); setMail(""); setPhone(""); setMessage("");
  }


  return (
    <div id="get-in-touch">
        <div id="hours-location">

            <div id="overlay-2">
                <div className="in-touch-header">
                    <div className='in-touch-title header-item'>GET IN TOUCH</div>
                    <div className="in-touch-number header-item">+2348038034835</div>
                </div>

                <div className='location-hour'>
                    <div className="location">
                        <h3 className='loaction-header'>Location</h3>
                        <p>2345 Divi St</p>
                        <p>San Francisco, CA 94222</p>
                    </div>

                    <div className="hour">
                    <h3 className='hour-header'>Hours</h3>
                    <p>Mon:10am – 5pm</p>
                    <p>Tue:10am – 5pm</p>
                    <p>Wed:10am – 5pm</p>
                    <p>Thur:10am – 5pm</p>
                    <p>Fri:10am – 3pm</p>
                    <p>Sat:10am – 5pm</p>
                    <p>Sun:Closed</p>
                    </div>
                </div>
            </div>

            <div className="img-div">
                <img src="src/assets/Mercedes-Benz-Free-PNG-Image.png" alt="" className='in-touch-img'/>
            </div>
        </div>
  </div>
  )
}

export default GetInTouch