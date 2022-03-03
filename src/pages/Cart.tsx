import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import './Restaurant.css'
import './Cart.css'

const Cart = () => {
  const userCart = useSelector(state => state);


  useEffect(() => {
    console.log(userCart)
  
  }, [])
  
  
  return (
    <div className='restaurant__background'>
    <div className='restaurant__content'>
      <div>
        <h1 className='cart-title'>Cart</h1>
        <div className='title-underline'></div>
      </div>
      
    </div>  
    </div>
  )
}

export default Cart