import React from 'react'
import Rating from './Rating'


export default function Product(props) {
    const {product}=props
  return (
   
    <div key={product.slug} className="card">
    <a href={`/product/${product.slug}`}>
      <img className="medium" src={product.image} alt="product" />
    </a>
    <div className="card-body">
    <a href={`/product/${product.slug}`}>
        <h2>{product.name}</h2>
      </a>
     <Rating rating={product.rating}  numReviews={ product.numReviews}></Rating>
      <div className="price">${product.price}</div>
    </div>
  </div>
 
  )
}
