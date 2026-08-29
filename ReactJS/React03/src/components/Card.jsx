import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzyFEYqkfqQndmgOzZOOARlzz0aG-awZi9pckun0Qeg&s=10" alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
