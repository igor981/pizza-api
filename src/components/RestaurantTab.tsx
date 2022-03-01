import React from 'react'
import './RestaurantTab.css'
import { Restaurant } from '../interfaces'
import { useState, useEffect } from 'react'
import { getRestoMenu } from '../service/pizza.service'

const RestaurantTab = (info: any) => {
  const [clicked, setClicked] = useState<Boolean>(false)
  const [menu, setMenu] = useState<any[]>([])
  const {name, id, address1, address2, rank, distance} = info['info']


  const getMenu = async (id: number) => {
    const res = await getRestoMenu(id)
    setMenu(res)

  }
  useEffect(() => {
    getMenu(id)
  }, [])
  

  return (
    <div className='restaurant'>
      <div className='restaurant__container'>
        <div className='restaurant__imagecontainer'>

      <img className='restaurant__image'src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' alt='pizza-image' />
        </div>
      <div className='restaurant__info'>
        <div></div>
        <h4>{name && name}</h4>
        <p>Address: {address1}</p>
        <p>Second adress: {address2}</p>
        <p>rank: {rank}</p>
        <p>Distance: {distance / 1000}km away</p>
      </div>

      </div>
      <div className='restaurant__menu'>
        <ul>
          {menu && menu.length > 0 ? 
            menu.map((item, index) => {
              console.log(item)
              return (
                <li key={index}className='menu__item'>
                  <p>{item.category}</p>
                  <p>{item.name}</p>
                  <p>{item.price}kr</p>
                </li>
              )
            })
          : <></>}
        </ul>

      </div>
    </div>
  )
}

export default RestaurantTab