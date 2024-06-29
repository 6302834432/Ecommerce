import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../ShopContext/ShopContext'
import remove_icon from '../../Assets/cart_cross_icon.png'
import Cart from '../../Pages/Cart'
const CartItem = () => {
    const {all_product,Cartitems,AddtoCart,RemoveFromCart,getCartTotalAmount}=useContext(ShopContext)
  return (
    <div className='cartitem'>
        <div className='cartitem-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <hr/>
            {
                all_product.map((e)=>{
                    if (Cartitems[e.id]>0){
                        return <div key={e.id}>
                        <div className='cartitem-format cartitem-format-main'>
                <img src={e.image} alt='' className='cartitem-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{Cartitems[e.id]}</button>
                <p>${e.new_price*Cartitems[e.id]}</p>
                <img  className ="cartitem-remove-icon"src={remove_icon} alt="" onClick={()=>{RemoveFromCart(e.id)}}/>
            </div>
            <hr/>
            </div>
                    }
                    return null;
                })
            }
            <div className='cartitem-down'>
                <div className='cartitem-total'>
                    <h1>
                        Cart Total
                    </h1>
                    <div>
                        <div className='cartitem-total-items'>
                            <p>
                                Subtotal
                            </p>
                            <p>${getCartTotalAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitem-total-items'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitem-total-items'>
                            <h3>Total </h3>
                            <h3>${getCartTotalAmount()}</h3>
                        </div>
                    </div>
                    <button >Proceed to checkout</button>
                </div>
                <div className='cartitem-promocode'>
                    <p>If u have a promo code then apply it</p>
                    <div className='cartitem-promobox'>
                        <input type='text' placeholder='Apply Here'></input>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default CartItem