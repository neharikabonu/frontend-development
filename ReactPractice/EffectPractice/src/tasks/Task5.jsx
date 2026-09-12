import React, { useEffect, useState } from 'react'

const Task5 = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const users = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")

      const data = await response.json()
      console.log(data);
      setUsers(data)

    }
    users()
  }, [])

  return (
    <div>
      {users.map((x) => (
        <div key={x.id}>
          <p>{x.name}</p>
          <p>{x.username}</p>
        </div>
      ))}
    </div>
  )
}

export default Task5
