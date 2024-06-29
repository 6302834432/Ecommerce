import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h2 >
                Exclusive
            </h2>
            <h2>
                offers for u
            </h2>
            <p>
                only on best sellers products
            </p>
            <button>
                check now
            </button>
        </div>
        <div className='offers-right'>
            <img src={exclusive} alt =""/> 
        </div>
    </div>
  )
}

export default Offers