import React from 'react'
import Task16 from './Tasks/Task16.jsx'

const productDetails =
  {
    name:"Laptop", price:550, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy2PbKvDhqzpMZkLW7xrYfHfIdY9Iglce0YXbs_QYtA&s=10", inStock:true
  }

const App = () => {
  return (
    <div>
      <Task16 productDetails={productDetails} />
    </div>
  )
}

export default App
