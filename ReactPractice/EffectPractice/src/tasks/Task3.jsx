import React, { useEffect, useState } from 'react'

const Task3 = () => {

  const [isVisible, setIsVisible] = useState(true)

  useEffect(()=> {
    if(isVisible) {
      console.log("Visible")
    } else {
      console.log("Not visible")
    }

  },[isVisible])

  return (
    <div>
      {isVisible && <p>Hello</p>}
      <button onClick={() => {
        setIsVisible(!isVisible)
      }}> {isVisible ? "Hide" : "Show"} </button>
    </div>
  )
}

export default Task3
