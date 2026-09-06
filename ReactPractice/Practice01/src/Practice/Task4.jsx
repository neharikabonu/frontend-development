import React from 'react'

const Task4 = (props) => {
  return (
    <div>
      <p>{`Product: ${props.name}`}</p>
      <p>{`Price: $${props.price}`}</p>
      <p>{`Available: ${props.inStock ? "Yes" : "No"}`}</p>
    </div>
  )
}

export default Task4
