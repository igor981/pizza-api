import { createStore, combineReducers, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import {cartReducer} from './reducers/cartReducer'
import {restoReducer} from './reducers/restoReducer'

let reducer = combineReducers({
    cart: cartReducer,
    resto: restoReducer
})


export type RootState = ReturnType<typeof store.getState>
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware())
);

export default store