import  React, {useEffect} from 'react'
import '../pages/Restaurant.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cart.action'
import { newMenu } from '../redux/actions/resto.action'


const MenuItemMap = (props: any) => {

  const {index, classBool, item, restoId, menu} = props.props
    const dispatch = useDispatch()

    const handleAddedItem = (itemId: number, price: number) => {  
        const menuItem = {
          item: {
            id: itemId,
            quantity: 1,
            price: price
          },
          restoId: restoId
        }
        dispatch(addToCart(menuItem))
        dispatch(newMenu(menu))
      }

      useEffect(() => {
        console.log(item);
        
      }, [])
      

    return (
     <li key={index} className={classBool}>
      <div className="item-info">
        <p className="item-info__p">{item.category}</p>
        <p className="item-info__p">{item.name}</p>
        {item.topping && item.topping.length > 0
          ? item.topping.map((topping: string, index: number) => {
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
        <span className="add-to-cartBtn" onClick={() => handleAddedItem(item.id, item.price)}>
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
      )
    }
    
    export default MenuItemMap