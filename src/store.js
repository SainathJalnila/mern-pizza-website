import { combineReducers , createStore , applyMiddleware }  from 'redux';
import  thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension'
import { addNewPizza, editedPizzaReducer, getAllPizzaReducer, getPizzaById } from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cartReducer';
import { getalluserReducer, userReducer } from './reducers/userReducer';
import { loginReducer } from './reducers/userReducer';
import { orderPlaceReducer } from './reducers/orderPlaceReducer';
import { getallorders, userOrderReducer } from './reducers/userOrderReducer';










const finalReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer:cartReducer,
    userReducer:userReducer,
    loginReducer:loginReducer,
    orderPlaceReducer:orderPlaceReducer,
    userOrderReducer:userOrderReducer,
     addNewPizza:addNewPizza,
     getPizzaById:getPizzaById,
     editedPizzaReducer: editedPizzaReducer,
     getallorders:getallorders,
     getalluserReducer,getalluserReducer
})
const cartItem = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) :[]
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) :null
const initialState = {
    cartReducer:{
        cartItem:cartItem

    },
    loginReducer:{
        currentUser: currentUser
    }
    
}
const composeEnhancers  = composeWithDevTools({})
const store  = createStore(finalReducer ,initialState ,  composeEnhancers(applyMiddleware(thunk)));
export default store;