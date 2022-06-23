import React from 'react'
import './nav.css';

const Nav = () => {
  return (
    <div className='navbar'>
    <div className='navcont'>
    <div className='logo'>Booking.com</div>
    
    <div className='navitems'>
        <button className='navbutt'>Register</button>
        <button className='navbutt'>Login</button>
    </div>
    </div>

    </div>
  )
}

export default Nav