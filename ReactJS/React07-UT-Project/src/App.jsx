import React from 'react'
import Navbar from "./components/navbar"
import Content from "./components/content"
import Lower from "./components/Lower"

const data = [
  {
    color: "bg-green-200",
    topic: "STRATEGY",
    heading: "Money Momentum",
    content: "Track Premium helps you start saver investments insights covering.",
    time:"3 yrs CAGR",
    annum: "7.20%"
  },

  {
    color: "bg-blue-200",
    topic: "PLANS",
    heading: "Long-Term",
    content: "Create a vision. To get started, imagine your dream life.",
    time: "25yrs CAGR",
    annum: "14.20%"
  },

  {
    color: "bg-purple-200",
    topic: "STRATEGY",
    heading: "Focused",
    content: "Be focused Life planning, however, cab serve as a roadmap or guide.",
    time:"1 yr returns",
    annum: "11.20%"
  },

  {
    color: "bg-yellow-200",
    topic: "Plans",
    heading: "Fixed Income",
    content: "Get multiple benefits and lumpsum option & Guaranteed Reeturns",
    time: "5yrs CAGR",
    annum: "8.20%"
  }
]

const App = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Content />
      <Lower data={data} />
    </div>
  )
}

export default App
