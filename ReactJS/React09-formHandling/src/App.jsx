import React from 'react'

const App = () => {
  
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
