import React from 'react'

const Sidebar = ({companies, get_company_car, get_cars}) => {
    const query = ""
  return (
        <div className="sidebar" id='sidebar'>
            <div onClick={()=> get_cars(query)} className='company'>All</div>
            {
                companies?.map(company=>(
                    <div className="company" key = {company.id} onClick={(e)=>{get_company_car(company.id)}}>
                        {company.name}
                    </div>
                ))
            }
        </div>
  )
}

export default Sidebar