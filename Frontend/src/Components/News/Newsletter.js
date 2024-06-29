import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2> Get new  offers to  email </h2>
        <p>subscribe to our newletter and stay updated</p> 
        <div>
          <input type='email' placeholder='Enter Your Email'/>
          <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter