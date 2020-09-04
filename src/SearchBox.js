import React from 'react';
import './Card.css'

const SearchBox = ({searchField, searchChange}) =>{

  return (

    <div className = 'box'>
    <h1>Robo Friends</h1>
    <input className = 'search'
    type='search' placeholder = 'search robots' onChange = {searchChange} />
    </div>
  )
}

export default SearchBox;