import React from 'react'
import { Send } from 'lucide-react';

const content = () => {
  return (
    <div className='text-center mt-20'>
      <h1 className='font-bold leading-16 text-6xl'>Life Planning, Making <br />
      Easy to Turn Dreams a Reality.</h1>
      <h3 className='text-xl text-gray-600 font-bold mt-5'>Get Exclusive offers on purchase of any plans</h3>

      <form className='flex justify-center items-center mt-10 gap-5'>
        <div className='flex items-center border  w-fit rounded-2xl gap-5 px-5 py-2.5'>
        <Send className='w-5 h-5 text-black'/>
        <input className='font-bold placeholder-black' type="text" placeholder='Your Email'/>
        </div>
        <button className='bg-black text-white font-bold px-5 py-2 rounded-2xl'>Sign Up</button>
      </form>
    </div>
  )
}

export default content
