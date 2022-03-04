import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootReducerIf, OrderProp } from '../interfaces';
import '../pages/Restaurant.css'
import '../pages/Cart.css'
import { useDispatch } from 'react-redux'
import { deleteFromCart, changeQty } from '../redux/actions/cart.action'

const CartItem = (order: OrderProp, index: number) => {
  const [itemQty, setItemQty] = useState<number>(0)
  const userCart = useSelector((state: RootReducerIf) => state.cart);
  const resto = useSelector((state: RootReducerIf) => state.resto);
  const dispatch = useDispatch();


  const handleRemoveButton = async (itemId: number) => {
     dispatch(deleteFromCart(itemId));
  };

  const quantityView = () => {
    const num = userCart.cartItems[order.index].quantity
    setItemQty(num)
  }

  const changeQuantity = async (amount: string, itemId: number) => {
    const qtyInt = parseInt(amount)
    
    const item = {
      qty: qtyInt,
      id: itemId,
    };
    setItemQty(qtyInt)
    dispatch(changeQty(item));
    order.priceCount()
  };

  const item = resto[order.order.id - 1];

  
useEffect(() => {  
  quantityView()
}, [])


  

  if (item && item.category) {
    return (
      <li key={index} className={order.classBool}>
        <div className="item-info">
          <p className="item-info__p">{item.category && item.category}</p>
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
            <p className="item-info__rating"> {item.rank}/5 stjärnor </p>
          ) : null}
        </div>
        <div className="item-button">
          <p>{item.price}kr</p>
          <select
          className='option-select'
            value={itemQty}
            onChange={(e) => changeQuantity(e.target.value, item.id)}
          >
            <option value={1}>1</option>
            <option value={2}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <span
            className="add-to-cartBtn"
            onClick={() => handleRemoveButton(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-square add-circle deletebutton"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </div>
      </li>
    );
  }
  return <p>loading</p>;
}
     

export default CartItem