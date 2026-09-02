import React from 'react'

const navbar = () => {
  return (
    <div className='flex items-center justify-between p-5'>
      <h1 className='font-bold text-2xl'>Lyf :)  <span className='font-medium text-base ml-3'>/isurance@tir0pay.au</span></h1>
      <div className='flex gap-5'>
      <button className='font-bold border-2 border-gray-400 px-5 py-1.5 rounded-2xl'>Log In</button>
      <button className='font-bold text-white bg-black px-5 py-1.5 rounded-2xl'>Get Started</button>
      </div>
    </div>
  )
}

export default navbar
