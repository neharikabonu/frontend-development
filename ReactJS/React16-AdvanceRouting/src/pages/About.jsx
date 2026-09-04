import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  let navigate = useNavigate();
  const btnClick = () => {
    navigate('/');
  }
  return (
    <div>
      <div className='heading about'>
        <h1>About</h1>
      </div>

      <button onClick={btnClick}>Back to HomePage</button>
    </div>

  )
}

export default About
