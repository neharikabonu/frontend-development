import React, { useState } from 'react'
import SearchBox from './tasks/SearchBox'

const products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse", "Monitor"]

const App = () => {

  const [search, setSearch] = useState("")

  const filteredProducts = search ? products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  ) : []

  return (
    <div>
      <SearchBox products={products} onSearch={setSearch} />
      <p>Search Result: {search}</p>
      {search && filteredProducts.length === 0 && <p>No products found</p>  }
      {filteredProducts.map((product) => (
        <p key={product}>{product}</p>
      ))}

    </div>
  )
}

export default App
