import React from 'react'

const Task8 = (props) => {
  return (
    <div>
      <button style={{backgroundColor:`${props.color}`}}>{props.text}</button>
    </div>
  )
}

export default Task8
