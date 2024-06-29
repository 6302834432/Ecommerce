import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../ShopContext/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {AddtoCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt =""/>
                <img src={product.image} alt =""/>
                <img src={product.image} alt =""/>
                <img src={product.image} alt =""/>


            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt ="">

                </img>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>
                {product.name}
            </h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt =""/>
                <img src={star_icon} alt =""/>
                <img src={star_icon} alt =""/>
                <img src={star_icon} alt =""/>
                <img src={star_dull_icon} alt =""/>
                <p>
                    122
                </p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>
                    ${product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    ${product.new_price}
                </div>
            </div>
            <div className='productdisplay-right-description'>
                <h4>Description:<br/></h4>
            offering both comfort and style in one versatile garment. 
            These hooded sweatshirts feature a hood with drawstrings that can be adjusted for a snug fit, providing warmth and protection from the elements.
            </div>
            <div className='productdisplay-right-size'>
                <h1>
                    Select Size
                </h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{
                AddtoCart(product.id)
            }}> ADD TO CART </button>
            <p className='productdisplay-right-category'><span>Category:</span>{product.category},T-shirt ,Crop Top </p>
            <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest </p>
            
        </div>
    </div>
  )
}

export default ProductDisplay