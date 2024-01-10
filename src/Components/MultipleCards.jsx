import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { API_BASE_URL } from './config'

const MultipleCards = ({ cars }) => {
    return (
        <>
            {
                cars?.map(car => (
                    <Card id='card' key={car.id}>
                        <div style={{height: '300px', width: '100%', overflow: 'hidden', 
                                display: "flex", justifyContent: "center"}}>
                            {car.car_image && car.car_image.length ? (
                                <Card.Img src={`${API_BASE_URL}${car.car_image[0]}`} style={{ width: "100%", height: "100%", objectFit: "cover"}} />

                                ) : (
                                <Card.Img src='/download.jpeg' alt={`${car.name}`}  variant='top' style={{ width: "100%", height: "100%" }}/>
                            )}
                        </div>
                        <Card.Body>
                            <p><b>{car.name}</b></p>
                            <p>Status:<span> {car.status}</span></p>
                            <p>Price: &#8358;<span>{car.price}</span></p>
                        </Card.Body>
                        <Button variant='secondary' href={`detail/${car.id}`} className='view-btn'>View Car</Button>
                    </Card>
                ))
            }
        </>
    )
}

export default MultipleCards