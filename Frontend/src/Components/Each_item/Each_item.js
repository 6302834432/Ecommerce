import React from 'react'
import '../Each_item/Each_item.css'
import arrow_icon from '../../Assets/breadcrum_arrow.png'
const Each_item = (props) => {
    const {product} =props;
  return (
    <div className='Eachitem'>
        HOME<img src={arrow_icon}alt =""/>Shop <img src={arrow_icon}alt =""/> {product.category}<img src={arrow_icon}alt =""/>{product.name}
    </div>
  )
}

export default Each_item