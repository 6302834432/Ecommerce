import React, { useContext } from 'react'
import './RelatedProducts.css'
import data_product from '../../Assets/data.js'
import Item from '../../item/item.js'
import { ShopContext } from '../ShopContext/ShopContext'
const RelatedProducts = (props) => {
    const all_product=useContext(ShopContext);
    const count =4;
    console.log ('related');
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className='relatedproducts-items'>
            {
                
                data_product.map((item,i)=>{
                    
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts