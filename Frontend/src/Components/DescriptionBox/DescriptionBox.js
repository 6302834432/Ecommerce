import React, { useCallback, useState } from 'react'
import '../DescriptionBox/DescriptionBox.css'
const DescriptionBox = (props) => {
  const [setcontent ,tag]=useState('description');
  const descrption ="A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service. "
  return (

    <div className='description'>
    <div className='description-navigator'>
    <div className='description-nav-box' onClick={()=>tag("description")}>Description</div>
    <div className='description-nav-box fade' onClick={()=>{
      tag('reviews')
    }}>Reviews</div>
    </div>
    <div className='description-description'>
      {setcontent==="description"?descrption:props.reviews}
    </div>
    
    
    
    
    </div>
  )
}

export default DescriptionBox