import React, { useEffect, useState } from 'react'

const Task7 = () => {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleResize=() => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div>
      <p>Window Width: {width}</p>
    </div>
  )
}

export default Task7
