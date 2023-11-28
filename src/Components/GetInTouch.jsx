import React, { useState } from 'react'
import {API_BASE_URL} from './config'

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
    <div className="img-div">
      <img src="src/assets/Mercedes-Benz-Free-PNG-Image.png" alt="" className='in-touch-img'/>
    </div>
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
    </div>

    <div id="message">
      <div id="message-header">
        Send A Message
      </div>

      <form action="" onSubmit={submit}>
        <input type="text" placeholder='Name' className='input' value={name}
          required onChange={(e)=>setName(e.target.value)}/>

        <input type="text" name="" id="" placeholder='Phone' className='input' value={phone} minLength={10} maxLength={15}
              required onChange={(e)=>setPhone(e.target.value)} />

        <input type="email" placeholder='Email' className='input' value={mail} required
              onChange={(e)=>setMail(e.target.value)} />
        <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='input' required
                value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button type="submit" className='input'>Submit</button>
      </form>
    </div>
  </div>
  )
}

export default GetInTouch