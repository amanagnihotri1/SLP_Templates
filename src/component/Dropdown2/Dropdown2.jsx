import React, { SetStateAction, useRef, useState } from 'react';
import "../Dropdown2/dropdown2.scss";
import {ReactComponent as ArrowDown} from "../../assets/dropdown.svg";
export const Dropdown2 = ({values,styleObj,optionStyle,setpricing,setCardId,itemId,arrowColor,borderStyle,wrapperstyle}) => {
const[isOpen,setOpen]=useState(false);
console.log(values);
const optionCard=useRef();
const[dffdf,setdffdf]=useState({
  price:values[0].price,
  time:values[0].time,
  id:values[0]._id,
  });
const[deg,setDeg]=useState('0deg');  
  return (
    <div className="selectwrapper" onClick={()=>{setOpen(!isOpen); setDeg(!isOpen?'180deg':'0deg'); setCardId(itemId)}} style={{backgroundColor:borderStyle,...wrapperstyle}}>
     <button style={{...styleObj}}>{dffdf.time}
     <span 
      style={{
        display:'flex',
        alignItems:'center', 
      }}
     >
      <p>₹{dffdf.price}</p>
     <ArrowDown fill={arrowColor} style={{transform:`rotate(${deg})`,transition:'0.2s ease-in-out'}}/>
     </span>
     </button>
     {isOpen &&
     <div className="option" style={{...optionStyle}} ref={optionCard}
     onMouseLeave={()=>{optionCard.current.style.display="none"; setDeg('0deg')}}>
     { 
      values.map((item)=>(
      <div className='optionmain' onClick={()=>
      { 
        setpricing({price:item.price,time:item.time,id:item._id});
        setdffdf({price:item.price,time:item.time,id:item._id});
        }}>
      <span className="option-leftside">
      <p>
      {item.time}
      </p>
      <p>Cancel anytime(Non-refundable)</p>
      </span>  
      <span className='option-rightside'>
      <p>₹{item.price}</p>
       <div className='offersmall'>
       <p className='original'>₹999/year,</p>
        <p>Save 60%</p>
       </div>
      </span>
      </div>  
      ))}
     </div>
     }
    </div>
  )
}
