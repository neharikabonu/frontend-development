import React from 'react'

const Task7 = (props) => {
  return (
    <div>
      <button style={{backgroundColor : `${props.button.b1.color}`}}>{props.button.b1.text}</button>
      <button style={{backgroundColor : `${props.button.b2.color}`}}>{props.button.b2.text}</button>
    </div>
  )
}

export default Task7
