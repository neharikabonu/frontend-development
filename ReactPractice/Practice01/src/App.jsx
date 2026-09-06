import React from 'react'
import Task1 from './Practice/Task1'
import Task2 from './Practice/Task2'
import Task3 from './Practice/Task3'
import Task4 from './Practice/Task4'


const App = () => {
  return (
    <div>

      <h2>Task1</h2>
      <Task1 /> <hr />

      <h2>Task 2</h2>
      <Task2 name="Neharika" /> <hr />

      <h2>Task3 <Task3 name="Neharika" age={22} /></h2>
      <hr />

      <h2>Task4 <Task4 name="Laptop" price={55000} inStock={true} /> </h2>
    </div>
  )
}

export default App
