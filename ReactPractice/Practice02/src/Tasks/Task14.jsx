import React from 'react'
import "./Task14.css"

const Task14 = (props) => {
  return (
    <div className='container'>
      <div className="image">
          <img src={props.image} alt="" />
      </div>
      <div className="details">
        <p>{props.name}</p>
        <p> ${props.price} </p>
      </div>
      <div className="bottom">
        {props.inStock ? 
        <button>Buy Now</button> : <p>Out of Stock</p>
        }
      </div>
    </div>
  )
}

export default Task14
