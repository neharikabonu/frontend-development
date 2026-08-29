import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Neharika' age={22}/>
      <Card user='Santosh' age={24}/>
    </div>
  )
}

export default App
