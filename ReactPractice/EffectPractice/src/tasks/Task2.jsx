import React, { useEffect, useState } from 'react'

const Task2 = () => {

  const [count, setcount] = useState(0)

  useEffect(() => {
    document.title=`Count: ${count}`
  },[count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>{if(count>0){
        setcount(count - 1)
      }}}>-</button>
      <button onClick={()=>setcount(count+1)}>+</button>
    </div>
  )
}

export default Task2
