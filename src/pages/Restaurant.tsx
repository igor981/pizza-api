import  React, {useState, useEffect} from 'react'
import './Restaurant.css'
import { useParams } from 'react-router-dom'
import { getRestoMenu, getRestoById} from '../service/pizza.service'
import { MenuIf, MenuItem, Restaurant as RestaurantIF} from '../interfaces'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cart.action'
import { newMenu } from '../redux/actions/resto.action'
import MenuItemMap from '../components/MenuItemMap'

const Restaurant = () => {
  type RestoParam = {
    id: string;
  };

  const  dispatch = useDispatch()

  const [menu, setMenu] = useState<MenuIf>([]);
  const [resto, setResto] = useState<RestaurantIF>();
  const { id } = useParams<RestoParam>();

  let everyOther = false;
  const getMenu = async (id: number) => {
    const resMenu = await getRestoMenu(id);
    const res = await getRestoById(id);
    setMenu(resMenu);
    setResto(res);
  };

  const handleAddedItem = (itemId: number, price: number) => {  
    const menuItem = {
      item: {
        id: itemId,
        quantity: 1,
        price: price
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
          
          menu.map((item: MenuItem, index: number) => {
            everyOther = !everyOther;
            const classBool = everyOther ? "menu__item gray" : "menu__item";
            const props = {
              index: index,
              classBool: classBool,
              item: item,
              restoId: id,
              menu: menu,
            };

            return <MenuItemMap key={index} props={props} />;
          })
          : <></>}
        </ul>

      </div>
    </div>  
    </div>
  )
}

export default Restaurant