import React from 'react'
import './gallery.css'
import { FaLocationArrow } from "react-icons/fa";
import { BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
const Gallery = ({data,index,indexhandler,showgallery}) => {

    const decrease=()=>{
        if(index<=0){
            indexhandler(data.length-1);
        }
        else indexhandler(index-1)
  }

  const increase=()=>{
    if(index>=data.length-1){
        indexhandler(0);
    }
    else indexhandler(index+1)
  }

  return (
    <div className='gallerycont'>
         <div >
            <img className='galleryimg' src={data[index]} ></img>
           
            <div className='arrowscont' >
            <div>
            <BsFillArrowLeftSquareFill  onClick={decrease} className='arrows'></BsFillArrowLeftSquareFill>
            <BsFillArrowRightSquareFill  onClick={increase} className='arrows'></BsFillArrowRightSquareFill>
            </div>
     
            <div >
                <AiFillCloseSquare onClick={()=>{showgallery(false)}} className='close'></AiFillCloseSquare>
             </div>
            </div>
            
          </div>
    </div>
  )
}

export default Gallery