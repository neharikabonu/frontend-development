import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  // const getData = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')

  //   console.log(response.data);
  // }

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');

    console.log(response.data);

    setData(response.data);
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((x) => {
          return <h1> {x.author} </h1>
        })}
      </div>
    </div>
  )
}

export default App
