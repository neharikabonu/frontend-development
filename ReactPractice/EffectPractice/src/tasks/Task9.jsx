import React, { useEffect, useState } from 'react'

const Task9 = () => {

  const currentTime = new Date();
  console.log(currentTime);
  

  const [time, setTime] = useState(currentTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  },[])
  return (
    <div>
      <h2>Current Time : {String(time.toLocaleTimeString())}</h2>
    </div>
  )
}

export default Task9
