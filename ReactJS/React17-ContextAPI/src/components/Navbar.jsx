import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {

  const data = useContext(ThemeDataContext)



  return (
    <div className='nav'>
      <h2>Logo</h2>
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
