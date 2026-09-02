import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  return (
    <div className='container'>
      <div className='main'>
        <h1> {num} </h1>
      </div>
      <div className="buttons">
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
      </div>
    </div>
  )
}

export default App
