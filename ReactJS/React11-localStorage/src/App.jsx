import React from 'react'

const App = () => {

  // localStorage.setItem('user','Neharika');
  // const user = localStorage.getItem('user');
  // localStorage.removeItem('user');

  // localStorage.clear();

  const user = {
    username: "Neharika",
    age: 22,
    city: "Hyderabad"
  }

  localStorage.setItem('user', JSON.stringify(user));

  let name = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h1>{name.username}</h1>
    </div>
  )
}

export default App
