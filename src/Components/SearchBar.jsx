import React from 'react'

const SearchForm = ({search_data, query, setQuery}) => {
  return (
    <div className='form'>
        <form onSubmit={search_data}>
            <input type="text" value={query} id="search_data" onChange={(e)=>setQuery(e.target.value)} placeholder='Search Car'/>
            <input type="submit" value="Search" className='search_data'/>
        </form>
    </div>
  )
}

export default SearchForm