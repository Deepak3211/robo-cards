import  React from 'react';
import './Card.css'

const Card = (props) =>{
  const {id, name, email} = props;

  return (


    <div className = 'cards'>
    <img src={`https://robohash.org/${id}?set=set5&size=200x200&bgset=bg1 `} alt="random "  className = 'card' />
    <div >
    <h3>{name}</h3>
    <p>{email}</p>
    </div>
    </div>
  )
}

export default Card;