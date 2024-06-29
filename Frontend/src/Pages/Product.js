import React, { useContext } from 'react'
import { ShopContext } from '../Components/ShopContext/ShopContext'
import {useParams} from 'react-router-dom'
import Each_item from '../Components/Each_item/Each_item';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.js';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.js';
import all_product from '../Assets/all_product.js'
const Product = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const reviews=getRandomInt(1,100);
  // const {all_product}=useContext(ShopContext);
  const {productId}=useParams()
  const product =all_product.find((e)=>e.id===Number(productId));
  console.log(product)
  return (
    <div>
      {console.log(product)}
      <Each_item product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox reviews={reviews}/>
      <RelatedProducts category={product.category}/>
    </div>
  )
}

export default Product