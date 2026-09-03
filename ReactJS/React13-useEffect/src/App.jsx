import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const App = () => {
  const [num, setnum] = useState(0);
  const [num1, setnum1] = useState(0);

  function A() {
    console.log("A changed");
  }

  function B() {
    console.log("B changed");
  }

  useEffect(()=> {
   A();    
  },[num]);

  useEffect(()=> {
   B();    
  },[num1]);

  return (
    <div>
      <h1>A : {num}</h1>
      <h1>B : {num1} </h1>
      <button onClick={()=> {setnum(num+1)}}>Button A</button>
      <button onClick={()=> {setnum1(num1+1)}}>Button B</button>
    </div>
  )
}

export default App
