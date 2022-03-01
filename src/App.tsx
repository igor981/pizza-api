import React, {useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { getAllRestos } from './service/pizza.service';
import { GeoLocation, Restaurant } from './interfaces';
import { getDistance } from 'geolib';
import Navbar from './components/Navbar'
import axios, {AxiosResponse} from 'axios';
import RestaurantTab from './components/RestaurantTab';

import './App.css';

function App() {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>({
        latitude: 0, 
        longitude: 0
  })
  const [restos, setRestos] = useState<Restaurant[]>()

  const getCurrentPosition = async () => {
    await navigator.geolocation.getCurrentPosition( position => {
      setGeoLocation({
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      })
    })
  }

  const getRestos = async () => {
    const res = await getAllRestos()
    res.map((item: any) => {
      const storeDistance: any = {
        latitude: item.latitude,
        longitude: item.longitude
      }
      item.distance = getDistance(geoLocation, storeDistance, 100) / 10
    })
    res.sort((a:any , b:any) => a.distance - b.distance)
    await setRestos(res)
  }

  useEffect(() => {
    getCurrentPosition().then(() => getRestos())
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <div className='resto-list'>
        <h1>The API pizza shop!</h1>
        <div>
          <h4>Restaurants near by</h4>
          <ul>
            {restos && restos.length > 0 ? 
              restos.map( (item: any, index) => {
                return ( 
                <li key={index}>
                    <RestaurantTab  info={item}/>
                </li> )
              })
             : null}
          </ul>

        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
