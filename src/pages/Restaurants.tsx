import React, {useState, useEffect } from 'react';
import { getAllRestos } from '../service/pizza.service';
import { GeoLocation, Restaurant, RestaurantUpdate, GeoPosition} from '../interfaces';
import { getDistance } from 'geolib';
import RestaurantTab from '../components/RestaurantTab';
import './Restaurants.css'

const Restaurants = () => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>({
    latitude: 0, 
    longitude: 0
})
const [restos, setRestos] = useState<Restaurant[]>()

const getCurrentPosition = async () => {
await navigator.geolocation.getCurrentPosition( (position: GeoPosition) => {  
  setGeoLocation({
    latitude: position.coords.latitude, 
    longitude: position.coords.longitude
  })
})
}

const getRestos = async () => {
const res = await getAllRestos()
const restoUpdate = res.map((item: Restaurant) => {
  const storeDistance: GeoLocation = {
    latitude: item.latitude,
    longitude: item.longitude
  }
  item.distance = getDistance(geoLocation, storeDistance, 1000) / 10
})
restoUpdate.sort((a:RestaurantUpdate , b:RestaurantUpdate) => a.distance - b.distance)
await setRestos(res)
}

useEffect(() => {
getCurrentPosition().then(() => getRestos())
}, [])

  return (
    <div className='resto-background'>
    <div className='resto-list'>
        <h1 className='resto-list__title'>Pizzerior</h1>
        <div>
          <h4 className='resto-list__undertitle'>Resturanger nära dig!</h4>
        <div className='resto-list__underline'></div>
          <div className='resto-cards'>
            {restos && restos.length > 0 ? 
              restos.map( (item: RestaurantUpdate, index) =>  <RestaurantTab key={index}  {...item}/> ): null}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Restaurants