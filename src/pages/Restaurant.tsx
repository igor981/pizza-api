import React, {useState, useEffect} from 'react'
import './Restaurant.css'
import { useParams } from 'react-router-dom'
import { getRestoMenu, getRestoById} from '../service/pizza.service'
import { Restaurant as RestaurantIF} from '../interfaces'

const Restaurant = () => {
  type QuizParams = {
    id: string;
  };

  const [menu, setMenu] = useState<any[]>([])  
  const [resto, setResto] = useState<RestaurantIF>()  

  const { id } = useParams<QuizParams>();

  let everyOther = false;
  const getMenu = async (id: number) => {
    const resMenu = await getRestoMenu(id)
    const res = await getRestoById(id)
    await setMenu(resMenu)  
    await setResto(res)
  }

  useEffect(() => {
    const parsedId = Number(id)
    getMenu(parsedId)
     
    
  }, [])


  return (
    <div className='restaurant__background'>
    <div className='restaurant__content'>
      <div className='restaurant__content__info'>
        <div className='info__picture'>
        <img
          className="restaurant__image image__page"
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          alt="pizza-image"
        />
        </div>
        <div className='info__text'>
        <h1>{resto && resto.name } </h1>
        <p>{resto && resto.address1 } </p>
        <p>{resto && resto.address2 } </p>

        </div>
      </div>
      <div className='restaurant__content__menu'>
      <ul>
          {menu && menu.length > 0 ? 
            menu.map((item, index) => {
              everyOther = !everyOther
              let classBool = everyOther ? 'menu__item gray' : 'menu__item'
              return (
                <li key={index} className={classBool}>
                  <div className="item-info">
                    <p className="item-info__p">{item.category}</p>
                    <p className="item-info__p">{item.name}</p>
                    {item.topping && item.topping.length > 0
                      ? item.topping.map((topping: any, index: number) => {
                          if (index === 0) {
                            return (
                              <p key={index} className="item-info__topping">
                                ({topping}
                              </p>
                            );
                          }
                          if (index === item.topping.length - 1) {
                            return (
                              <p key={index} className="item-info__topping">
                                {topping})
                              </p>
                            );
                          }
                          return (
                            <p key={index} className="item-info__topping">
                              {topping},
                            </p>
                          );
                        })
                      : null}

                    {item.rank ? (
                      <p className="item-info__rating">
                        {" "}
                        {item.rank}/5 stjärnor{" "}
                      </p>
                    ) : null}
                  </div>
                  <div className="item-button">
                    <p>{item.price}kr</p>
                    <span className="add-to-cartBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-square add-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </span>
                  </div>
                </li>
              );
            })
          : <></>}
        </ul>

      </div>
    </div>  
    </div>
  )
}

export default Restaurant