import React from 'react'
import { ArrowRight } from 'lucide-react';

const Lower = (props) => {

  return (
    
    <div className='px-6'>
      <div className='flex justify-between'>
      <h4 className='font-bold text-2xl'>Featured Plans</h4>
      <h6 className='font-bold'>Explore All</h6>
      </div>
      <div className="flex gap-10">
      {props.data.map((item) => (
      <div className={`${item.color} mt-10 rounded-xl p-10 flex-1`}>
        <p className='text-gray-500 font-bold text-sm mb-3'>{item.topic}</p>
        <h2 className='text-2xl font-bold'>{item.heading}</h2>
        <p className='mt-3 font-bold text-sm leading-6'>{item.content}</p>

        <div className='mt-8 border-t border-gray-400'>
          <p className='mt-8 text-xs text-gray-500'>{item.time}</p>
          <div className='flex justify-between'>
            <h2 className='font-bold'>{item.annum}</h2>
            <button className='bg-black text-white rounded-sm px-1'><ArrowRight size={15}/></button>
          </div>
        </div>
      </div> 
      ))}
      </div>

    </div>
  )
}

export default Lower
