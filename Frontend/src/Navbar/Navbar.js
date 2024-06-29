import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Components/ShopContext/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuref = useRef();
  const Dropdown_toggle=(e)=>{
    menuref.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Shooper</p>
      </div>
      <img  className='nav-menu-dropdown'src={nav_dropdown} alt="" onClick={Dropdown_toggle} />
      <ul ref={menuref} className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/' >Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'> Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className='navbar-login-cart'>
       {localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace('/login')}}>logout</button>: <Link to="/login"><button>login</button></Link>}
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className='navbar-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};


export default Navbar