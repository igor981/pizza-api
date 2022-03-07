import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import './Restaurant.css'
import './Cart.css'
import { placeOrder as placeOrderService } from '../service/pizza.service'
import { useDispatch } from 'react-redux'
import { emptyCart, placeOrder} from '../redux/actions/cart.action'
import CartItem from '../components/CartItem'
import { RootReducerIf, CartItemIf } from '../interfaces';


const Cart = () => {
  const [totalCost, setTotalCost] = useState<number>(0)
  const userCart = useSelector( (state: RootReducerIf ) => state.cart);
  const resto = useSelector((state: RootReducerIf ) => state.resto);
  const dispatch = useDispatch()
  
  
  
  let everyOther = false;
  
  
  
  const getPriceCount = () => {
     const num = userCart.cartItems.reduce((price: number, item: CartItemIf) => price + (item.price * item.quantity), 0)
     setTotalCost(num)         
   }

  const handleEmptyCart = () =>{
    dispatch(emptyCart())
  }
  
  const handleClick = async () => {
    if(userCart.cartItems.length > 0 ){
      const total = {
        cart: userCart.cartItems,
        restuarantId: userCart.restuarantId
      }

      const order: any = await placeOrderService(JSON.stringify(total))

      console.log(order);
      

      if (order.status === 200){
        dispatch(placeOrder(order.data))
        dispatch(emptyCart())
      }
    }
  }

  useEffect(() => {
    getPriceCount()
  }, [])
  
  
  return (
    <div className='restaurant__background'>
    <div className='restaurant__content cartdiv'>
      <div className='cartdiv__upper'>
        <h1 className='cart-title'>Kassa</h1>
        <div className='title-underline'></div>
      </div>
      <div className='cartdiv__lower'>
        {resto === undefined ? <p> Laddas </p> : 
        <ul>
        {userCart && userCart.cartItems.length > 0 ?  
          userCart.cartItems.map( (order: CartItemIf, index: number) => {
            everyOther = !everyOther

      
            const listClass = everyOther ? 'menu__item gray' : 'menu__item'
            return <CartItem key={index} order={order} index={index} classBool={listClass} priceCount={getPriceCount}/>
            })
            
            


            : <h1 className='cartdiv__lower__tomkassa'>Din kassa är tom!</h1>}
        </ul>
      }
      { userCart && userCart.cartItems.length > 0 ?
      <div className='cartdiv__lower__price'>
        <p> <b>Total pris:</b>   {totalCost}kr</p>
      </div>
      
        : null
      }
      { userCart && userCart.cartItems.length > 0 ?
      <div className='cartdiv__buttons'>
        <button className='cart-button buy'  onClick={() => handleClick()}>Beställ</button>
        <button className='cart-button empty' onClick={() => handleEmptyCart()}>Töm kassan</button>
      </div>
      
        : null
      }
      </div>
      
    </div>  
    </div>
  )
}

export default Cart