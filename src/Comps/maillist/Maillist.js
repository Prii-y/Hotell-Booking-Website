import React from 'react'
import './maillist.css'
const Maillist = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time save money!!</h1>
        <div>Sign up and we'll send the best deals</div>
            
        <form className='mailcont' >
<input type='email' placeholder='Your email'></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Maillist