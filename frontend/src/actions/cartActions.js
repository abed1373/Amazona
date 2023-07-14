import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/slug/${slug}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.slug,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems)
  );
}
