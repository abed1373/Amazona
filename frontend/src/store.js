import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers'
const initialState = {
userSignin:{
  userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo'))
  :null
},

  cart: {
    cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
   
  },
}

const reducer = combineReducers({
  productList: productListReducer,
  productDetails:productDetailsReducer,
  cart:cartReducer,
  userSignin:userSigninReducer,
  userRegister:userRegisterReducer,

})
const store = configureStore({ reducer }, initialState)
export default store
