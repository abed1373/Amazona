import React, { useEffect } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux'

export default function CartScreen() {
    const params=useParams()
    const {slug}=params
   const location=useLocation()
    const qty=new URLSearchParams(location.search).get('qty')

    const dispatch=useDispatch()
    useEffect(()=>{
if(slug){
    dispatch(addToCart(slug,qty))
}
    },[dispatch, qty, slug])
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>ADD TO CART:Slug:{slug} Qty:{qty}</p>
    </div>
  )
}
