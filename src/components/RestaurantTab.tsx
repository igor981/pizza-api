import React from 'react';
import './RestaurantTab.css'
import { useNavigate } from 'react-router-dom'
import {  RestaurantUpdate } from '../interfaces';

const RestaurantTab = (item: RestaurantUpdate) => {
  const {name, id, distance} = item
  const navigate = useNavigate(); 
 
  const handleClick = () => {
    console.log(item);
    
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