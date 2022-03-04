import { CartItemIf } from '../../interfaces';
import * as actionTypes from '../constants/cartConstant'
import { ActionIf } from '../../interfaces';

const stored = localStorage.getItem('pizza-cart')
const emptyCart =  {
    cartItems: [],
    order: {},
    restuarantId: 0
}

const initialState = stored ? JSON.parse(stored) : emptyCart;



export const cartReducer = ( state = initialState, action: ActionIf) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART: {
        const objIndex = state.cartItems.findIndex(
          (cartItem: CartItemIf) => cartItem.id === action.payload.item.id
        );

        if (objIndex !== -1) {
          state.cartItems[objIndex].quantity += 1;
          const newCart = state;
          localStorage.setItem("pizza-cart", JSON.stringify(newCart));
          return newCart;
        }

        const newCart = {
          ...state,
          cartItems: [...state.cartItems, action.payload.item],
          restuarantId: action.payload.restoId,
        };
        localStorage.setItem("pizza-cart", JSON.stringify(newCart));
        return newCart;
      }

      case actionTypes.REMOVE_FROM_CART: {
        const objIndex = state.cartItems.findIndex(
         ( cartItem: CartItemIf) => cartItem.id === action.payload
        );

        if (objIndex !== -1) {
          const filteredCart = state.cartItems.filter((cartItem: CartItemIf) => {
            if (cartItem.id !== action.payload) {
              return cartItem;
            }
          });
          const newState = {
            ...state,
            cartItems: filteredCart,
          };
          localStorage.setItem("pizza-cart", JSON.stringify(newState));
          return newState;
        }
        return state
      }

      case actionTypes.CHANGE_QTY: {
        const objIndex = state.cartItems.findIndex(
          (cartItem: CartItemIf) => cartItem.id === action.payload.id
        );
        if (objIndex !== -1) {
          state.cartItems[objIndex].quantity = parseInt(action.payload.qty);
          const updatedCart = state;
          localStorage.setItem("pizza-cart", JSON.stringify(updatedCart));
          return updatedCart;
        }

        return state;
      }

      case actionTypes.EMPTY_CART: {
        const emptyCart = {
            ...state,
            cartItems: [],
          };
          localStorage.setItem("pizza-cart", JSON.stringify(emptyCart));

        return emptyCart;
      }

      case actionTypes.PLACE_ORDER: {
        const newOrder = {
          ...state,
          order: action.payload,
        };

        localStorage.setItem("pizza-cart", JSON.stringify(newOrder));
        return newOrder;
      }
      case  actionTypes.CLEAR_ORDER: {
        const emptyOrder = {
            ...state,
            order: {},
          };
          localStorage.setItem("pizza-cart", JSON.stringify(emptyOrder));

        return emptyOrder;
      }
      default:{

        return state;
      }
    }
}