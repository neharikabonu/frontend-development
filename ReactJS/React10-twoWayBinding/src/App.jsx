import React, { useState } from 'react'

const App = () => {

  const [name, setname] = useState("");


  
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted by ", name);
    setname('');
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' 
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
