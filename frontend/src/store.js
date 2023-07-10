import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productListReducer } from './reducers/productReducers'
const initailState = {}

const reducer = combineReducers({
  productList: productListReducer,
})
const store = configureStore({ reducer }, initailState)
export default store
