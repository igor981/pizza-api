import { createStore, combineReducers, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import {cartReducer} from './reducers/cartReducer'
import {restoReducer} from './reducers/restoReducer'

const reducer = combineReducers({
    cart: cartReducer,
    resto: restoReducer
})



const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware())
);

export default store