import GetInTouch from '../Components/GetInTouch'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../Components/config';


const Listing = () => {
	const params = useParams()
    const status = params.status ? params.status : null;
    const [companies, setCompanies] = useState(null)
    const [cars, setCars] = useState(null)

    useEffect(()=>{
    	if(status){
    		console.log(status)
            get_companies()
            get_cars()
    	}
    	else{
        get_companies()
        get_cars()}
    }, [])

    let get_company_car = async (id) =>{
        let res = await fetch(`${API_BASE_URL}/company/${id}`,{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        let data = await res.json()
        setCars(data.cars)
    }

    let get_companies = async () =>{
        let res = await fetch(`${API_BASE_URL}/companies`,{
            method: "GET",
            headers: {"COntent-Type": "application/json"}
        })
        let data = await res.json()
        setCompanies(data)
        return
    }

    let get_cars = async () =>{
        let res = await fetch(`${API_BASE_URL}/getcars`,{
            method: "GET",
            headers: {"COntent-Type": "application/json"}
        })
        let data = await res.json()
            setCars(data)

    }
  return (
    <div id='listing'>
        <div className="list-content">
            <div className="sidebar">
                {companies ? companies.map((company)=>(
                    <div className="company" key = {company.id} onClick={(e)=>{get_company_car(company.id)}}>
                        {company.name}
                    </div>
                )): <h1>Loading</h1>}
            </div>


            <div className="cars">
            {cars ? cars.map((car)=>(
                    <div className="company" key = {car.id}>
                        {car.name}
                    </div>
                )): <h1>Loading</h1>}
            </div>
        </div>
        <GetInTouch />
    </div>
  )
}

export default Listing
