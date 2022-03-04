import * as actionTypes from '../constants/cartConstant'
import { ActionIf } from '../../interfaces';


const stored = localStorage.getItem('pizza-menu')
const noMenu =  {
    noMenu: true
}

const initialState = stored ? JSON.parse(stored) : noMenu;

export const restoReducer = ( state = initialState, action: ActionIf ) => {
    switch (action.type) {
        case actionTypes.NEW_MENU:{   
            const newMenu = action.payload
            localStorage.setItem("pizza-menu", JSON.stringify(newMenu));
            return newMenu
        }
        default: {
            return state;
        }
    }
}