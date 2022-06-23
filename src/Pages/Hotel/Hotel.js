import React, { useState } from 'react';
import './hotel.css'
import Navbar from '../../Comps/Navbar/Nav'
import Header from '../../Comps/Header/Header'
import Footer from '../../Comps/Footer/Footer'
import Mailist from '../../Comps/maillist/Maillist'
import { FaLocationArrow,BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill } from "react-icons/fa";
import Gallery from '../../Comps/Gallery/Gallery';

const Hotel = () => {

  const [showgallery,setshowgallery]=useState(false);
  const [ind,setindex]=useState(null);

  const galleryhandeler=(index)=>{
    setshowgallery(true);
    setindex(index);
  }


  const photos=[
    ' https://cf.bstatic.com/xdata/images/hotel/max1280x900/335065890.jpg?k=4ea8bf94d313d74c423715db82e9b88a667f7282d6ae58d6974cd5f2fa117599&o=&hp=1',
   'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335065941.jpg?k=ef8b752d7881879d81c11333365c36f4d13c9c3693a1fd88b46ea231d5bf95a5&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335061115.jpg?k=2e2800208285ea12e9589f96b091d49e92f1de1b53cc7c552cb20e737d3bbce5&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335061116.jpg?k=518d70462a18d4eb4071c421202a3908ac6eb070ea83971ba3a0eab46a105e77&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335063282.jpg?k=15f6f9067f4b0a7690691c125756b0b2ca35a5ea8eb1490c0b0bc87bd70f7f21&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/335065531.jpg?k=fd1d2f8f4eed3bcc94f0ba15439c07d1ab3ac180236c95bf016d61340175fdab&o=&hp=1'
  ];

  return (
    <div>
    {showgallery&& <Gallery index={ind} data={photos} indexhandler={setindex} showgallery={setshowgallery}></Gallery>}
        
      <Navbar></Navbar>
      <Header type='list'></Header>
      <div>
        <div className='hotelinfocont'>
          <div className='hotelinfo'>
            <h1>Barceló EmperatrizOpens</h1>
            <p>
            <FaLocationArrow></FaLocationArrow>
            Gran Vía, 66, Centro, 28013 Madrid, Spain
            </p>
           <p className='blue'>Excellent Location - 500m from city centre</p>
           <div></div>
          </div>

          <div className='btncont' >
            <button className='bookbtn'>Reserve or Book now</button>
          </div>
        </div>
        <div className='photos'>
        
          {
            photos.map((elem,index)=>( <div key={index}><img  onClick={()=>{galleryhandeler(index)}} className='room' src={elem}></img></div> ))
          }
        
        </div>
        
       
          <div className='hotelinfo2  '>
           
            <div className='hoteldesc'>
              <h1>Stay in the heart of Madrid</h1>
              <p>
              Situated on Madrid’s Gran Via, just 150 m from Plaza España, Vincci Via 66 features a seasonal rooftop terrace with city views. Each stylish room includes free internet access.
              Hotel Vincci Vía - 66 offers air-conditioned rooms with an elegant design, inspired by the theatre. All rooms have a flat-screen TV and pillow menu. Toiletries are included in the modern bathrooms.
              The hotel serves a daily breakfast which includes products for celiacs.
              The Vincci Vía is located a 10-minute walk from the Royal Palace and Puerta del Sol. Santo Domingo Metro Station is 150 m away and is just a few stops from Paseo del Prado and Retiro Park.
              This is our guests' favourite part of Madrid, according to independent reviews.
              Couples particularly like the location — they rated it 9.6 for a two-person trip.
              </p>
            </div>
            
            
            <div className='bookingbox'>
              <h4>Property highlights</h4>
              <h5>Perfect for a 1-night stay!</h5>
              <p>Situated in the real heart of Madrid, this hotel has an excellent location score of 9.6</p>
             
              <div>
                <h5>Rooms with</h5>
                <div>Terrace</div>
                <div>City views</div>
              </div>

              <div>
              
                <h3>$945 <span>(9 nights)</span> </h3>
            </div>
              <button>Reserve or Book now</button>
              
            
            </div>
          </div>
      </div>
      
      <Mailist></Mailist>
      <Footer></Footer>
     
    </div>
  )
}

export default Hotel

