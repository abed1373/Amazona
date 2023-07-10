import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productDetailsReducer, productListReducer } from './reducers/productReducers'
const initailState = {}

const reducer = combineReducers({
  productList: productListReducer,
  productDetails:productDetailsReducer,
})
const store = configureStore({ reducer }, initailState)
export default store
