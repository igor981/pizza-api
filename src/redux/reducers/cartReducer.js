import * as actionTypes from '../constants/cartConstant'

const stored = localStorage.getItem('pizza-cart')

const initialState = stored ? stored : {
    cartItems: [Object],
    restuarantId: 0
}



export const cartReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const newCart ={
                cartItems: [... state.cartItems, action.payload.item],
                restuarantId: action.payload.id
            }
            localStorage.setItem('pizza-cart', JSON.stringify(newCart))
            return newCart
        default:
            return state;
    }
}