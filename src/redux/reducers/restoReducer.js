import * as actionTypes from '../constants/cartConstant'


const stored = localStorage.getItem('pizza-menu')
let noMenu =  {
    noMenu: true
}

const initialState = stored ? JSON.parse(stored) : noMenu;

export const restoReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.NEW_MENU:
            const newMenu = action.payload

            localStorage.setItem("pizza-menu", JSON.stringify(newMenu));

            console.log(newMenu, 'testing');

            return newMenu
    
        default:
            return state;
    }
}