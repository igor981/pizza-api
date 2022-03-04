import React from 'react';
import './RestaurantTab.css'
import { useNavigate } from 'react-router-dom'

const RestaurantTab = (info: any) => {
  const {name, id, distance} = info['info']
  const navigate = useNavigate(); 
 
  const handleClick = () => {
    navigate(`/restaurant/${id}`)

  }
  

  return (
    <div className="card" onClick={() => handleClick()}>
      <div className="card__imagecontainer">
        <img
          className="restaurant__image"
          src="/pizza.png"
          alt="pizza-image"
        />
      </div>
      <div className="card__info">
        <h4 className='resto-title'>{name && name}</h4>
        <p>{distance / 10000}km away</p>
      </div>
    </div>
  );
}

export default RestaurantTab