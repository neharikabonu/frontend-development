import React from 'react'

const Task10 = (props) => {
  return (
    <div>
      <ul>
        {props.fruits.map((x)=> {
          return <li key={x}>{x}</li>
        })}
      </ul>
    </div>
  )
}

export default Task10
