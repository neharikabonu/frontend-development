import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);

    setUserData(response.data)
  }

  useEffect(() => {
    getData();
  }, [index])

  let printUserData = <h1 className='text-white text-3xl absolute top-1/2 left-1/2 -translate-y-1/2 delay-75'>Loading...</h1>

  if (userData.length > 0) {
    printUserData = userData.map((user) => {
      return <div >
        <a href={user.url} target='_blank'>
      <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img className='h-full w-full object-cover' src={user.download_url} alt="image" />
      </div>
      <h2 className='font-bold text-lg'>{user.author}</h2>
      </a>
      </div>
    })
  }

  return (
    <div className='bg-black min-h-screen text-white p-4'>
    
    <div className='flex h-full flex-wrap gap-4 p-4'> {printUserData} </div>
    <div className='flex justify-center items-center p-4 gap-20'>
      
      <button onClick={() => {
        if(index>1) {
          setIndex(index-1)
          setUserData([])
        }
      }} className='bg-black font-bold text-white active:scale-90 px-4 py-2 text-sm cursor-pointer'>Prev</button>
      
      <h3>Page {index}</h3>

      <button onClick={() => {
        setIndex(index+1)
        setUserData([])
      }} className='bg-black font-bold text-white px-4 py-2 text-sm cursor-pointer'>Next</button>
    </div>
    </div>
  )
}

export default App
