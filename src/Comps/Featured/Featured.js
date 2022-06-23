import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featureditem'>
            <img className='featuredimg' src='https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'></img>
        <div className='featuredtitle'>
            <h1>Dublin</h1>
            <h2>33 Properties</h2>
        </div>
        </div>

        <div className='featureditem'>
            <img className='featuredimg' src='https://images.unsplash.com/photo-1620677368158-32b1293fac36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwYWlufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60'></img>
        <div className='featuredtitle'>
            <h1>Portugal</h1>
            <h2>12 Properties</h2>
        </div>
        </div>

        <div className='featureditem'>
            <img className='featuredimg' src='https://images.unsplash.com/photo-1485111776963-19787ff041f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'></img>
        <div className='featuredtitle'>
            <h1>Spain</h1>
            <h2>123 Properties</h2>
        </div>
        </div>
    </div>
  )
}

export default Featured