import React from 'react'
import Card from './components/Card.jsx'

const cardDetails = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    company: "Amazon",
    postedDay: "5 days ago",
    position: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "120/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    company: "Google",
    postedDay: "30 days ago",
    position: "Graphic Designer",
    tag1: "Part-Time",
    tag2: "Flexible Schedule",
    pay: "150-220k",
    location: "Kochi, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZzuAycKnMmFF2HhTN2iygjirRh5zOpiovaTdBgR00g&s=10",
    company: "Dribble",
    postedDay: "18 days ago",
    position: "Senior Motion Designer",
    tag1: "Contract",
    tag2: "Remote",
    pay: "85/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFImIRQREQXw1weUSMnUoshBvJOTgTlUqRzrF7h_Oi2w&s=10",
    company: "Figma",
    postedDay: "5 days ago",
    position: "UX Designer",
    tag1: "Full-Time",
    tag2: "In offcie",
    pay: "200-250k",
    location: "Mumbai, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGN8IGmiITfXcG4e2NUSScS5PIPD9ooNiF84RzPWsIFA&s=10",
    company: "Airbnb",
    postedDay: "5 days ago",
    position: "Junior UI/US Designer",
    tag1: "Contract",
    tag2: "Remote",
    pay: "100/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2tL_LqE0tXh0tBYRxY0_FnYVAJXw_0ArGg3BGHAByw&s=10",
    company: "Apple",
    postedDay: "5 days ago",
    position: "Graphic Designer",
    tag1: "Full-Time",
    tag2: "Flexible Schedule",
    pay: "85-120k",
    location: "Kerala, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    company: "Amazon",
    postedDay: "5 days ago",
    position: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "120/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    company: "Google",
    postedDay: "30 days ago",
    position: "Graphic Designer",
    tag1: "Part-Time",
    tag2: "Flexible Schedule",
    pay: "150-220k",
    location: "Kochi, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZzuAycKnMmFF2HhTN2iygjirRh5zOpiovaTdBgR00g&s=10",
    company: "Dribble",
    postedDay: "18 days ago",
    position: "Senior Motion Designer",
    tag1: "Contract",
    tag2: "Remote",
    pay: "85/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFImIRQREQXw1weUSMnUoshBvJOTgTlUqRzrF7h_Oi2w&s=10",
    company: "Figma",
    postedDay: "5 days ago",
    position: "UX Designer",
    tag1: "Full-Time",
    tag2: "In offcie",
    pay: "200-250k",
    location: "Mumbai, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGN8IGmiITfXcG4e2NUSScS5PIPD9ooNiF84RzPWsIFA&s=10",
    company: "Airbnb",
    postedDay: "5 days ago",
    position: "Junior UI/US Designer",
    tag1: "Contract",
    tag2: "Remote",
    pay: "100/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2tL_LqE0tXh0tBYRxY0_FnYVAJXw_0ArGg3BGHAByw&s=10",
    company: "Apple",
    postedDay: "5 days ago",
    position: "Graphic Designer",
    tag1: "Full-Time",
    tag2: "Flexible Schedule",
    pay: "85-120k",
    location: "Kerala, India"
  }
]

const App = () => {
  return (
    <div className='parent'>
      {cardDetails.map((card) => (
        <Card cardDetails={card} />
      ))}
    </div>
  )
}

export default App
