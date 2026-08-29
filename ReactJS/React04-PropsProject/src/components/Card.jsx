import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
      <div className="header">
        <img src={props.cardDetails.logo} alt="" />
        <div>
          <button>Save <Bookmark size={13} /></button>
        </div>
      </div>
      <div className="main">
        <h3>{props.cardDetails.company} <span>{props.cardDetails.postedDay}</span></h3>
        <h1>{props.cardDetails.position}</h1>
        <div className="tags">
          <p>{props.cardDetails.tag1}</p>
          <p>{props.cardDetails.tag2}</p>
        </div>
      </div>
      <div className="footer">
        <div className="left">
          <p className='pay'>${props.cardDetails.pay}</p>
          <p className='location'>{props.cardDetails.location}</p>
        </div>
        <div className="right">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
