import React, { useEffect, useState } from 'react'

const Task6 = () => {

  const [second, setSecond] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(()=> {
    if(isRunning) {
      const timer = setInterval(() => {
        setSecond(prev => prev + 1);
      }, 1000);

      return () => {
      clearInterval(timer);
    }
    }

  },[isRunning])

  return (
    <div>
      <p>Seconds: {second} </p>
      <button onClick={() => {
        setIsRunning(true)
      }}>Start</button>

      <button onClick={()=> {
        setIsRunning(false)
      }}>Stop</button>

      <button onClick={() => {
        setIsRunning(false)
        setSecond(0)
      }}>Reset</button>
    </div>
  )
}

export default Task6
