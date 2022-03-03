import React, {useState, useEffect} from 'react'
import './Restaurant.css'
import { useParams } from 'react-router-dom'
import { getRestoMenu, getRestoById} from '../service/pizza.service'
import { Restaurant as RestaurantIF} from '../interfaces'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cart.action'
import { newMenu } from '../redux/actions/resto.action'
import { useSelector } from 'react-redux'


const Restaurant = () => {
  type RestoParam = {
    id: string;
  };

  const  dispatch = useDispatch()

  const [menu, setMenu] = useState<any[]>([])  ;
  const [resto, setResto] = useState<RestaurantIF>()  ;
  const { id } = useParams<RestoParam>();

  let everyOther = false;
  const getMenu = async (id: number) => {
    const resMenu = await getRestoMenu(id);
    const res = await getRestoById(id);
    setMenu(resMenu);
    setResto(res);
  };

  const handleAddedItem = (itemId: number) => {  
    
    const menuItem = {
      item: {
        id: itemId,
        quantity: 1,
      },
      restoId: id
    }
    dispatch(newMenu(menu))
    dispatch(addToCart(menuItem))
    

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
          src="/pizza.png"
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
                    <span className="add-to-cartBtn" onClick={() => handleAddedItem(item.id)}>
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