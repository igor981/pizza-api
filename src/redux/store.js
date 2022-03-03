import { createStore, combineReducers, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import {cartReducer} from './reducers/cartReducer'

let reducer = combineReducers({
    cart: cartReducer,
})



const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware())
);

export default store