import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartItemIf, RootReducerIf} from '../interfaces';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'
import Order from './Order';

const Navbar = () => {
  const cart = useSelector((store: RootReducerIf) => store.cart);

  const getCartCount = () => {
    return cart.cartItems.reduce((quantity: number, item: CartItemIf) => quantity + item.quantity, 0)
  }

  const show = cart.order.orderId !== undefined ? true : false

  return (
    <nav className='navbar' data-testid='navbar-1'>
        <h2 className='navbar__title'>The Pizza Place</h2>
        <div className='navbar__links'>
          {show === true ? 
          <Order /> : null
          }
        <Link className='navbar__buttons' to={'/'}>Hem</Link>
        <Link className='navbar__buttons' to={'/restaurants'}>Restauranger</Link>
        <Link className='navbar__cartbutton' to={'/cart'}>
          <div className='cart-div'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket icon" viewBox="0 0 16 16">
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <p className='cart-counter'> {getCartCount()}</p>
          </div>
        </Link>
        </div>
    </nav>
  )
}

export default Navbar