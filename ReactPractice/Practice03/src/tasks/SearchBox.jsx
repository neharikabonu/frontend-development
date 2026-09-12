import React from 'react'

const SearchBox = (props) => {

  return (
    <div className='container'>
      <input type="text" placeholder='Search products...'
      onChange={(event) => {
        props.onSearch(event.target.value)
      }} />
    </div>
  )
}

export default SearchBox
