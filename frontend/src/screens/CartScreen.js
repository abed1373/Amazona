import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

export default function CartScreen() {
    const params=useParams()
    const {slug}=params
   const location=useLocation()
    const qty=new URLSearchParams(location.search).get('qty')
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>ADD TO CART:Slug:{slug} Qty:{qty}</p>
    </div>
  )
}
