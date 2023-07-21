import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers'
import { orderCreateReducer } from './reducers/orderReducers'
const initialState = {
userSignin:{
  userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo'))
  :null
},

  cart: {
    cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
    shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {},
   paymentMethod:'PayPal',
  },
}

const reducer = combineReducers({
  productList: productListReducer,
  productDetails:productDetailsReducer,
  cart:cartReducer,
  userSignin:userSigninReducer,
  userRegister:userRegisterReducer,
  orderCreate:orderCreateReducer

})
const store = configureStore({ reducer }, initialState)
export default store
