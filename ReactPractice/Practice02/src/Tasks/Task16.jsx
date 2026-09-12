import React, { useState } from 'react'

const Task16 = (props) => {

  const [quantity, setQuantity] = useState(1)

  return (
    <div className='container'>
      <div className="image">
        <img src={props.productDetails.image} alt="" />
      </div>
      <div className="details">
       <p>${props.productDetails.price}</p> 
      </div>
      <div className="buttons">
        <p>Quantity : {quantity}</p>
        <button onClick={()=>{if(quantity>0){
          setQuantity(quantity-1)
        }}}>-</button>
        <button onClick={()=>{if(quantity<10){
          setQuantity(quantity+1)
        }}}>+</button>

        <p>Total Price: ${props.productDetails.price*quantity}</p>
      </div>
    </div>
  )
}

export default Task16
