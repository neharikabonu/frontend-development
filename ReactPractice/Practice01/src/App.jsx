import React from 'react'
import Task1 from './Practice/Task1'
import Task2 from './Practice/Task2'
import Task3 from './Practice/Task3'
import Task4 from './Practice/Task4'
import Task5 from './Practice/Task5'
import Task6 from './Practice/Task6'
import Task7 from './Practice/Task7'
import Task8 from './Practice/Task8'
import Task9 from './Practice/Task9'
import Task10 from './Practice/Task10'
import Task11 from './Practice/Task11'
import Task12 from './Practice/Task12'
import Task13 from './Practice/Task13'

const user = {
  name: "Neharika",
  age: 22,
  city: "hyderabad"
}

const handleClick = () => {
  alert("Button Clicked!")
}

const button = {
  b1 : {
    text: "Login",
    color: "blue"
  },

  b2 : {
    text: "Sign Up",
    color: "green"
  }
}

const fruits = ["Apple", "Banana", "Mango", "Orange"];

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Phone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 }
]

const App = () => {
  return (
    <div>

      <h2>Task1</h2>
      <Task1 /> <hr />

      <h2>Task 2</h2>
      <Task2 name="Neharika" /> <hr />

      <h2>Task3 <Task3 name="Neharika" age={22} /></h2>
      <hr />

      <h2>Task4 <Task4 name="Laptop" price={55000} inStock={true} /> </h2><hr />

      <h2>Task 5 <Task5 user={user} /> </h2> <hr />
    
      <h2>Task 6 <Task6 handleClick={handleClick} /> </h2><hr />

      <h2>Task 7 <Task7 button={button} /> </h2><hr />

      <h2>Task 8 <Task8 text="Login" color="blue"/> </h2>
      <Task8 text="Sign up" color="green" />

      <hr />

      <h2>Task 9 <Task9 fruits={fruits}/> </h2><hr />

      <h2>Task 10 <Task10 fruits={fruits} /></h2><hr />

      <h2>Task 11 <Task11 isLoggedIn={true} /> </h2><hr />

      <h2>Task 12 <Task12 hasNotification={true} /> </h2><hr />

      <h2>Task 13 <Task13 products={products} /> </h2>
    </div>
    
  )
}

export default App
