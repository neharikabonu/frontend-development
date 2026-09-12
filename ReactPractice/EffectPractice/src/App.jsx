import React from 'react'
import Task1 from './tasks/Task1'
import Task2 from './tasks/Task2'
import Task3 from './tasks/Task3'
import Task4 from './tasks/Task4'
import Task5 from './tasks/Task5'
import Task6 from './tasks/Task6'
import Task7 from './tasks/Task7'
import Task8 from './tasks/Task8'
import Task9 from './tasks/Task9'
import Task10 from './tasks/Task10'

const products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse", "Monitor"]

const App = () => {
  return (
    <div>
      <h3>Practice</h3> <hr />
      <Task1 /> <hr />

      <h4>Counter</h4>
      <Task2 /> <hr />

      <h4>Hide/Show</h4>
      <Task3 /> <hr />

      <h4>Search Bar</h4>
      <Task4 products={products} /> <hr />

      <h4>UseEffect - Fetch</h4>
      <Task5 /> <hr />

      <h4>Timer</h4>
      <Task6 /> <hr />

      <h4>Window Resize</h4>
      <Task7 /> <hr />

      <h4>Browser navigator.onLine</h4>
      <Task8 /> <hr />

      <h4>Digital Clock</h4>
      <Task9 /> <hr />

      <h4>Local Storage + Notes Making</h4>
      <Task10 />
    </div>
  )
}

export default App
