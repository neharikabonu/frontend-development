import React from 'react'

const Task13 = (props) => {
  return (
    <div>
      {props.products.map(x => {
        return <p key={x.id}> {x.name} - ${x.price} </p>
      })}
    </div>
  )
}

export default Task13
