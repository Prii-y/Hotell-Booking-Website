import React from 'react'
import './results.css';

const Results = () => {
  return (
    <div className='result'>

        <div className='resultimg'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/square600/335065533.webp?k=3821e482fd550b9d7a0c4cd9db013f31f6a436d7cca0a03ffae8df85909d02df&o=&s=1'></img>
     </div>


     <div className='resultinfo'>
     
         <h2 className='hotelname'>Barceló EmperatrizOpens</h2>
         
         <span className='block'> 1.5 km from centre</span>
         <span className='block bold'>
         Moncloa-Aravaca, Madrid          
         </span>
         <span className='block'> Show on map</span>
         
         <span className='facility'> Metro access
        </span>
        <div>Twin Room</div>
        <span>Beds: 1 double or 2 singles</span>
        <span className='block color smaller'>
        FREE cancellation 
        • No prepayment needed
      
        </span>
     </div>

        
     <div className='resultprice'>
        <div>Excellent <span className='review'>8.6</span></div>
        
        <div className='price'>
         $299  <br></br>
         <span className='tc smaller'> Includes taxes and fees</span>
        </div>
      
        <div>
        <button className='resultbtn'>See Availibility</button>    
        </div>
     
     </div>
    
      </div>
         
  )
}

export default Results