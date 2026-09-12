import React from 'react'

const Task12 = (props) => {
  return (
    <div>
      {props.hasNotification && <p>🔔 You have a new notification!</p>}
    </div>
  )
}

export default Task12
