import React from 'react';
import './Card.css'

const SearchBox = ({searchField, searchChange}) =>{

  return (

    <div className ='search'>
    <h1 className = 'robo'>Robo Cards</h1>
    
    <input className ='dataSearch' type="search" placeholder = 'search robots' onChange = {searchChange}/>
    </div>
  )
}

export default SearchBox;