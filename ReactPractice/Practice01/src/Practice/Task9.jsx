import React from 'react'

const Task9 = (props) => {
  return (
    <div>
      <ul>
        {props.fruits.map((x) => {
          return <li>{x}</li>
        })}
      </ul>
    </div>
  )
}

export default Task9
