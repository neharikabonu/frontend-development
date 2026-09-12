import React from 'react'

const Task5 = (props) => {
  return (
    <div>
      <h3>{`Name: ${props.user.name}`}</h3>
      <h3>{`Age: ${props.user.age}`}</h3>
      <h3>{`City: ${props.user.city}`}</h3>
    </div>
  )
}

export default Task5
