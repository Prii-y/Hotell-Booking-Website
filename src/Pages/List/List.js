import React,{useContext, useState} from 'react'
import {Appcont} from '../../App'
import Header from '../../Comps/Header/Header'
import Nav from '../../Comps/Navbar/Nav'
import Featured from '../../Comps/Featured/Featured'
import './list.css';
import {format} from 'date-fns';
import Results from '../../Comps/searchresult/Results'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useLocation } from 'react-router-dom'
const List = () => {

  const x=useContext(Appcont);
  const location=useLocation()
  console.log(location);
  const [showdate,setshowdate]=useState(false);
  const [dest,setdest]=useState(location.state.dest);
  const [date,setdate]=useState(location.state.date);
  const [adult,setadult]=useState(location.state.adult);
  const [children,setchildren]=useState(location.state.children);
  const [room,setroom]=useState(location.state.room);
  const [options,showoptions]=useState(false);

  return (
    <>
       <Nav></Nav>
      <Header type='list'></Header> 
      <div className='listcont'>


      <div className='listsearch'>
        <h3>Search</h3>
          <div className='destform'>
          <label htmlFor='dest'>Destination</label>
          <br></br>
          <input  placeholder={dest} type='text' id='dest'></input>

          </div>
         
          <div className='dates' onClick={()=>{setshowdate(!showdate)}}>{
          `${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,'dd/MM/yyyy') } `}
          </div>
          <div >
          { showdate &&
          <DateRange className='calender'
              editableDateInputs={true}
                onChange={item => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                  ranges={date}
                      />
          }
          </div>
         
          <div className='listitem' onClick={()=>{showoptions(!options)}}>
           {adult} Adult {children} Children {room} Room

          </div>
          {options&&
          <div className='optionscont'>
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
            </div>
          }
          <div className='pricecont'>
            <label>Min Price per night</label>
            <input type='number'></input> <br></br>
            <label>Max Price per night</label>
            <input type='number'></input>
          </div>
          <div>
            <button className='searchbtn'>Search</button>
          </div>
          </div>
         
        
      
      <div className='listresult'>
            <div>
              <Results></Results>
              <Results></Results>
              <Results></Results>
              <Results></Results>
              <Results></Results>
              <Results></Results>
              <Results></Results>
              <Results></Results>
              <Results></Results>
              <Results></Results>
            </div>
      </div>
    
      </div> 
    </>
  )
}

export default List