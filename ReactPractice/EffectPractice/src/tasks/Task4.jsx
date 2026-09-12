import React, { useEffect, useState } from 'react'

const Task4 = (props) => {

  const [search, setSearch] = useState("")

  const filteredProducts = search ? props.products.filter((product) => product.toLowerCase().includes(search.toLowerCase())) : []

  useEffect(() => {
    console.log(`Search changed: ${search}`);
    
  },[search])

  return (
    <div>
      <input type="text" placeholder='Search products...' onChange={(event) => {
        setSearch(event.target.value)
      }} />

      <p>Search Result: {search}</p>
      {(search && filteredProducts.length === 0) && 
      <p>No products found.</p>
      }
      {filteredProducts.map((product) => (
        <p key={product}>{product}</p>
      ))}
    </div>
  )
}

export default Task4
