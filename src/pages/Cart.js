import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import './Restaurant.css'
import './Cart.css'
import { placeOrder as placeOrderService } from '../service/pizza.service'
import { useDispatch } from 'react-redux'
import { emptyCart, placeOrder} from '../redux/actions/cart.action'
import CartItem from '../components/CartItem.js'

const Cart = () => {
  const userCart = useSelector(state => state.cart);
  const resto = useSelector(state => state.resto);
  const dispatch = useDispatch()

  let everyOther = false;



  const handleEmptyCart = () =>{
    dispatch(emptyCart())
  }
  
  const handleClick = async () => {
    if(userCart.cartItems.length > 0 ){
      const total = {
        cart: userCart.cartItems,
        restuarantId: userCart.restuarantId
      }
      const order = await placeOrderService(JSON.stringify(total))
      console.log(order.data);
      if (order.status === 200){
        dispatch(placeOrder(order.data))
        dispatch(emptyCart())
      }
    }
  }
  
  return (
    <div className='restaurant__background'>
    <div className='restaurant__content cartdiv'>
      <div className='cartdiv__upper'>
        <h1 className='cart-title'>Cart</h1>
        <div className='title-underline'></div>
      </div>
      <div className='cartdiv__lower'>
        {resto === undefined ? <p> loading </p> : 
        <ul>
        {userCart && userCart.cartItems.length > 0 ?  
          userCart.cartItems.map( (order, index) => {
            everyOther = !everyOther
            let listClass = everyOther ? 'menu__item gray' : 'menu__item'
            return <CartItem key={index} order={order} index={index} classBool={listClass}/>
            })
            
            
            : <h1 className='cartdiv__lower__tomkassa'>Din kassa är tom!</h1>}


        </ul>
      }
      
      <div className='cartdiv__buttons'>
        <button className='cart-button buy'  onClick={() => handleClick()}>Order</button>
        <button className='cart-button empty' onClick={() => handleEmptyCart()}>Empty the cart</button>
      </div>
      </div>
      
    </div>  
    </div>
  )
}

export default Cart