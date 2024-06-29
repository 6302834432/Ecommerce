import React from 'react'
import './Navbar.css'
import navbar_logo from '../../assets/nav-logo.svg'
import navprofile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        
        <img src={navbar_logo} alt='' className='nav-logo'></img>
        <img src={navprofile} alt=''className='nav-profile'/>
    </div>
  )
}

export default Navbar