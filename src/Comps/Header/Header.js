import React,{ useState } from 'react'
import './Header.css'
import { FaBed,FaCalendarCheck,FaPlus,FaPlusSquare,FaMinusSquare } from "react-icons/fa";
import { VscPerson } from "react-icons/vsc";
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { CgArrowsV } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
  const [showdate,setshowdate]=useState(false);
  const [showguest,setshowguest]=useState(false);
  const [dest,setdest]=useState('');
  const [adult,setadult]=useState(1)
  const [children,setchildren]=useState(0)
  const [room,setroom]=useState(1)
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const navigate=useNavigate(); 
  const searchhandler=()=>{
    navigate('/hotel',{state:{dest,date,adult,children,room}})
  };  
  return (
    <div className='header'>

    <div className={type=='list'?'headeritem listmode headeritem active':'headeritem headeritem active'}>
    <FaBed></FaBed> 
    <span >Stays</span>
    </div>
    { type!=='list' &&
    <>
    <div  className='headercont'>
    <h1 className='headertitle'>
    A lifetime of discounts? It's Genius.
    </h1>
    <p className='headerdesc'>
    Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account
    </p>
    <button className='headerbtn'>Sign in / Register</button>
    </div>
    
    <div className='headersearch'>
            <div className='headersearchitem'>
            <FaBed className='headericon'></FaBed>
            <input onChange={(e)=>{setdest(e.target.value)}} type='text' placeholder='Where are you going' className='headerinput'></input>
            </div>

            <div className='headersearchitem' >
            <FaCalendarCheck className='headericon'></FaCalendarCheck>
              <span onClick={()=>{setshowdate(!showdate)}}>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,'dd/MM/yyyy') } `}</span>
             {showdate&&<DateRange className='date'
              editableDateInputs={true}
                onChange={item => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                  ranges={date}
                      />} 
            </div>
      
            <div className='headersearchitem' >
            <div className='searchguestcont' onClick={()=>{setshowguest(!showguest)}}>
            <VscPerson className='headericon'></VscPerson>
            <span>{`${adult} Adult . ${children} Children . ${room} Room`}</span>
            <CgArrowsV className='headerico'></CgArrowsV> 
            </div>
           
            {showguest&&<div className='options'>
              <div className='optionsitem'>
                <span>Adults </span>
                <p>
                <button disabled={adult>=30} className='guestbutton' onClick={()=>{setadult(adult+1)}}>+</button>  {adult} <button className='guestbutton' 
                onClick={()=>{setadult(adult-1)}} disabled={adult<=0} >-</button>
              </p>
              </div>
              <div className='optionsitem'>
                <p>Children </p> 
                <p>
                <button className='guestbutton' onClick={()=>{setchildren(children+1)}} disabled={children>=30}>+</button>  {children} <button className='guestbutton'
                 onClick={()=>{setchildren(children-1)}} disabled={children<=0}>-</button>
             
                </p> 
                 </div>
              <div className='optionsitem'>
               <span>Room</span> 
               <p><button className='guestbutton' disabled={children>=30} onClick={()=>{setroom(room+1)}} >+</button>  {room} <button className='guestbutton' onClick={()=>{setroom(room-1)}}
                disabled={children<=0}>-</button>
             </p>
                 </div>
            </div>}
            
            </div>
            <div className='headersearchitem  '>
            <button className='headerbtn' onClick={searchhandler}>Search</button>
            </div>
    </div>
    </>}
     </div>
  )
}

export default Header