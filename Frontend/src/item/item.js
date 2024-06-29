import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'
const Item = (props) => {
  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}> <img  onClick={window.scroll(0,0)}src={props.image} alt=""/></Link>
        <p>{props.name}</p>
        <div className='itemprices'>
            <div className='itemprices-new'>
                ${props.new_price}
            </div>
            <div className='itemprices-old'>
                ${props.old_price}
            </div>
        </div>
        
    </div>
  )
}

export default Item