import React, { useState } from 'react'
import "./Task14.css"

const Task15 = (props) => {

  const [isAdded, setIsAdded] = useState(false)

  return (
    <div className='container'>
      <div className="image">
        <img src={props.productDetails.image} alt="" />
      </div>
      <div className="details">
        <p>{props.productDetails.name}</p>
        <p> ${props.productDetails.price} </p>
      </div>
      <div className="bottom">
        {props.productDetails.inStock ? (
          isAdded ? (<p>Added to Cart ✅</p>) : (
          <button onClick={() => setIsAdded(true)}>
              Add to Cart
            </button>
          )
        ) : (
          <p>Out of Stock</p>
        )}
      </div>
    </div>
  )
}

export default Task15
