import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme} />
    </div>
  )
}

export default App
