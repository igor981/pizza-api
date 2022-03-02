import React from 'react'
import './RestaurantTab.css'
import { Restaurant } from '../interfaces'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRestoMenu } from '../service/pizza.service'

const RestaurantTab = (info: any) => {
  const {name, id, distance} = info['info']
  let navigate = useNavigate(); 
 
  const handleClick = () => {
    console.log('test');
    navigate(`/restaurant/${id}`)

  }
  

  return (
    <div className="card" onClick={() => handleClick()}>
      <div className="card__imagecontainer">
        <img
          className="restaurant__image"
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
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