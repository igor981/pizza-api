import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { clearOrder } from '../redux/actions/cart.action'
import './Navbar.css'
import './Order.css'

const Order = () => {

  const store = useSelector(store => store)
  const [clicked, setClicked] = useState(false)


  const dispatch = useDispatch()


  const orderClass = ['order-div']
  

  if (clicked){
      orderClass.push('show')
  }


    const handleClickClear = () => {
      dispatch(clearOrder())
    }


    useEffect(() => {
      console.log(store.cart.order.orderId);
    }, [])
    
  return (
      <div className='order__nav'>
          <div className='navbar__buttons order-button'
          onClick={() => setClicked(!clicked)}
          >
             <p>Din order</p>
          </div>
          
          <div className={orderClass.join(' ')}>
            <h3>Beställning:</h3>
            <p> <b>Status:</b>{store.cart.order.status}</p>
            <p><b>Ankomst tid:</b><br/> {moment(store.cart.order.esitmatedDelivery).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p><b>Pris:</b> {store.cart.order.totalPrice}kr</p>
            <p><b>Tid beställt:</b>{moment(store.cart.order.orderedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p><b>Order id:</b>{store.cart.order.orderId}</p>
            <button className='order__nav__button'onClick={() => handleClickClear()}>Clear order</button>
          </div>
          
        
      </div>
      
  )
}

export default Order