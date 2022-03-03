import * as actionTypes from '../constants/cartConstant'
import { CartItemIf, Cart } from '../../interfaces'


const stored = localStorage.getItem('pizza-cart')
let emptyCart =  {
    cartItems: [],
    restuarantId: 0
}

const initialState = stored ? JSON.parse(stored) : emptyCart;






export const cartReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            const objIndex = state.cartItems.findIndex((obj => obj.id === action.payload.item.id));

            console.log(objIndex, 'hit');
            if (objIndex !== -1) {
                state.cartItems[objIndex].quantity += 1
                return state
            }

            const newCart = { 
                cartItems: [...state.cartItems, action.payload.item], 
                 restuarantId: action.payload.restoId 
           } 
            localStorage.setItem('pizza-cart', JSON.stringify(newCart)) 
            return newCart
        default:
            return state;
    }
}