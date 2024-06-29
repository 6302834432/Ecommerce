
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;

  }
  return cart;
}
const ShopContextProvider = (props) => {
  const [Cartitems, SetCartItems] = useState(getDefaultCart());
  const [all_product, setAll_product] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/allproducts').then((res) => res.json()).then((data) => setAll_product(data)).catch((err) => console.log(err))
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/cartData', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          "Content-Type": 'application/json'

        },
        body:""
      }).then((res) => res.json()).then(data => SetCartItems(data))
    }
  

}, []
  )

const AddtoCart = (itemId) => {
  SetCartItems((prev) => (
    { ...prev, [itemId]: prev[itemId] + 1 }))
  if (localStorage.getItem('auth-token')) {
    fetch('http://localhost:4000/addtoCart', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'auth-token': `${localStorage.getItem('auth-token')}`,
        "Content-Type": 'application/json'

      },
      body: JSON.stringify({ 'itemId': itemId })
    }).then((res) => res.json()).then(data => console.log(data))
  }
};

const RemoveFromCart = (itemId) => {
  console.log(itemId)
  SetCartItems((prev) => {

    return { ...prev, [itemId]: prev[itemId] - 1 };
  });
  if (localStorage.getItem('auth-token')) {

    fetch('http://localhost:4000/removeFromCart', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'auth-token': `${localStorage.getItem('auth-token')}`,
        "Content-Type": 'application/json'

      },
      body: JSON.stringify({ 'itemId': itemId })
    }).then((res) => res.json()).then(data => console.log(data))
  }
};

const getCartTotalAmount = () => {
  let total = 0
  for (let item in Cartitems) {
    if (Cartitems[item] > 0) {
      let iteminfo = all_product.find((product => product.id === Number(item)))
      // console.log (iteminfo)
      total += iteminfo.new_price * Cartitems[item];
    }


  }
  return total
}
const getTotalCartItems = () => {
  let totalItem = 0;
  for (const item in Cartitems) {
    if (Cartitems[item] > 0) {
      totalItem++;
    }

  }
  return totalItem;
}
const contextValue = { getCartTotalAmount, all_product, Cartitems, AddtoCart, RemoveFromCart, getTotalCartItems };
return (
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
)
}

export default ShopContextProvider