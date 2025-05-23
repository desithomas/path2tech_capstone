/* Import Holding Area Starts */

import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

/* Import Holding Area Ends Here */

const Navbar = () => {

     const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
     <img src={assets.logo} alt="" className="logo" />
     <ul className="navbar-menu">     
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li  onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>App</li>
        <li  onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
     </ul>

     <div className="nav bar-right">
        <img src={assets.search_icon} alt="Search Icon" />
     </div>

     <div className="navbar-search-icon">
        <img src= {assets.basket_icon} alt="Basket Icon" />
        <div className="dot"></div>
     </div>

   
     <button>Sign In</button>

     </div>
  )
}

export default Navbar 