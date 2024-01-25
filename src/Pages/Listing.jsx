import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../Components/config';
import Sidebar from '../Components/Sidebar';
import MultipleCards from '../Components/MultipleCards';
import SearchForm from '../Components/SearchBar';
import { Accordion } from 'react-bootstrap';
import Loading from '../Components/Loading';
import GetInTouch from '../Components/GetInTouch';



const Listing = () => {
	const params = useParams()
    const status = params.status ? params.status : null;
    const [companies, setCompanies] = useState(() => {return null})
    const [cars, setCars] = useState(() => {return null})
    const [query, setQuery] = useState(() => {return ''})
    const [loading, SetLoading] = useState(()=>{return true})

    useEffect(()=>{
    	if(status){
            get_companies()
            get_cars(query,status)
    	}
    	else{
        get_companies()
        get_cars(query, status)}
    }, [])


    let search_data = async(e)=>{
        let status = null;
        e.preventDefault()
        get_cars(query, status)
        setQuery('')
    }

    let get_company_car = async (id) =>{

        SetLoading(true)

        let res = await fetch(`${API_BASE_URL}/company/${id}`,{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        let data = await res.json()
        console.log(data)
        setCars(data.cars)
        SetLoading(false)
    }



    let get_companies = async () =>{
        let res = await fetch(`${API_BASE_URL}/companies`,{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        let data = await res.json()
        setCompanies(data)
        return
    }


    let get_cars = async (query="", status="") =>{
        SetLoading(true)
        let url;
        if(status){
             url = `${API_BASE_URL}/getcars/${status}`
        }
        else{
             url = `${API_BASE_URL}/getcars?query=${query}`
        }

        let res = await fetch(url,{
            method: "GET",
            headers: {"COntent-Type": "application/json"}
        })
        let data = await res.json()
        setCars(data)
        SetLoading(false)
    }


    if(loading){
        return(
          <Loading />
        )
      }

  return (
    <>
        <div className="inner-component">
            <SearchForm {...{search_data, query, setQuery}}/>
            <Sidebar {...{companies, get_company_car, get_cars}}/>
            <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Company</Accordion.Header>
                        <Accordion.Body>
                            <div className="inner-accordion-item">
                                <div onClick={()=> get_cars(query)} className='company'>All</div>
                                {
                                    companies?.map(company=>(
                                        <div className="company" key = {company.id} onClick={(e)=>{get_company_car(company.id)}}>
                                            {company.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        <div id='listing'>
                    <div className="cars">
                        {cars ? (
                            
                            cars.length > 0 ? (
                                <MultipleCards {...{cars}}/>
                            ) : (
                                <div>Not Available</div>
                            )
                        ) : (
                            <h1>Loading</h1>
                        )}
                    </div>
                <GetInTouch />
            </div>
    </>
  )
}

export default Listing
