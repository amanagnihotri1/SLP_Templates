import React,{useState} from 'react';
import { useRef } from "react";
import {data} from "../../data.js";
import Slider from 'react-slick';
import "../template1/slideStyles.scss";
import Modal from '../Modal/Modal.jsx';
import {ReactComponent as TickSvg} from "../../assets/tickfortemplate1.svg";
import {ReactComponent as Ticksvg} from "../../assets/coupontick.svg";
import { ReactComponent as CouponCross } from "../../assets/couponCross.svg";
import { Popup } from "../popup/Popup";
import { Dropdown2 } from "../Dropdown2/Dropdown2";
import "../template1/template.scss";
export const Template1 = () => {
  const cardRef=useRef();
  console.log(14,cardRef.current);
  const[cardid,setCardId]=useState('');
  const[pricingObj,setPricingObj]=useState({});
 const[isOpen,setModal]=useState(false);
 const[activeIndex,setActiveIndex]=useState(null);
 const[show,setShow]=useState(false);
 const[coupon,setCoupon]=useState(null);
 const[currentSlide,setSlide]=useState(0);
 console.log(activeIndex);
 const slidesCount=data.length;
 const slideToShow=3;
  const slideRef=useRef();
  const settings = {
    dots: false,
    className:"mainWrapperStyle",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    centerMode:'true',
    speed:300,
    initialSlide:0,
    swipe:false,
  };
  const dropStyle={
    background:'#FFF',
    borderRadius:'55px',
    fontFamily:`Roboto,sans-serif`,
    width: '276px',
    height: '40px',
    padding: '0px 1rem 0rem 1rem',
    marginRight: '0rem',
    fontSize:'16px',
    color:'black',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  };
  const optionstyle=
  {
    color:'black',
    backgroundColor:'#FFF'
    
  }
  const wrapperStyle=
  {
   width:'276px',
  }
  return (
    <>
    <h1 className="subshead">Choose your Subscription Plan</h1>
    <div className="carousalwrapper">
    <div
    className="arrowwrapper0"  
    style={{backgroundColor:data[0].primaryColor,visibility:currentSlide!==0?'visible':'hidden'}}
    onClick={()=>{slideRef.current.slickPrev(); setSlide(currentSlide-1)}}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
    </div>
    <Slider {...settings} ref={slideRef}>
     {data.map((item,index)=>
     <div className="commcard" key={index}>
      <div className="mainContentWrapperStyler" style={{backgroundColor:item.primaryColor}} ref={cardRef} onMouseOver={()=>{cardRef.current.style.border=`2px solid red`;}}> 
       <h4 className="subscriptionTitle">{item.subscriptionName}</h4>
       <span className="discountText1"><p className="originalPrice">₹999/year</p><p className="offer">,Save 60%</p></span>
       <div className="pricetag">
       <h2>₹{(item.id===cardid && pricingObj.price) || item?.tiers[0]?.price}{(item?.id===cardid &&(pricingObj?.time==='1 year' || pricingObj?.time===undefined ? '/ yr': <p className='stylesmallText'>for {pricingObj?.time}</p>) || '/ yr')}
       </h2>
       </div>
       <div className="mid_wrapper">
       {item?.tiers?.length>1 && 
      <Dropdown2 
      setpricing={setPricingObj}
      values={item.tiers}
      styleObj={{...dropStyle,
      backgroundColor:'#FFF',
      color:'#000',
      border:`0.5px solid ${item.secondaryColor}`,
      }} 
      optionStyle={optionstyle} 
      cardId={cardid}
      setCardId={setCardId}
      itemId={item.id}
      wrapperstyle={wrapperStyle}
      />
      } 
       <button className={`actionbuttonclick ${item.primaryColor===`#C8EAF8`?'color1':''} ${item.primaryColor==='#C9F7C1'?'color2':''}${item.primaryColor==='#E7DBF9'?'color3':''}`}
      >
       Subscribe
       </button>
       {activeIndex!==item.id?
       (<p
       className='notappliedcoupon0'
       style={{
         color:'#000',
         }}
         onClick={()=>{setActiveIndex(item.id); setModal(!isOpen);}}
       >Apply Coupon</p>):
       (coupon!=null &&<span 
       className="appliedcouponstyling0">
         <Ticksvg stroke={`#30B73B`} className='checkIconStyle' />
       <p>{coupon}</p>
       <CouponCross className="crossStyle"
         onClick={()=>{setCoupon(null); setActiveIndex(null);}}/>
       </span>
     )}
       <span className="warningText">Cancel anytime,(Non-refundable)</span>
       </div>
      </div>
      <div className="benefitwrapper0">
      <p style={{fontWeight:'500',fontSize:'13px',color:'#000'}}>Benefits & offers:</p>
      {item.benefits.map((it)=>(
      <div className="benefititem1">
        <div className="iconwrapper">
         <TickSvg fill="#000" stroke="#000"/>
         </div>
         <span className="itemText">
         {it}
         </span>   
        </div>
      ))}
      {item?.offers &&<p className="revealarea1" onClick={()=>{setShow(!show); setCardId(item.id)}}>More</p>}
      </div>
    </div>
        )}
    </Slider>
    <div
    className="arrowwrapper0" 
    style={{backgroundColor:data[0].primaryColor,visibility:currentSlide!==slidesCount-slideToShow?'visible':'hidden'}}
    onClick={()=>{slideRef.current.slickNext(); setSlide(currentSlide+1) 
    }}  
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="#FFF" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
</svg>
    </div>
    <Modal show={show} setShow={setShow} data={data} cardId={cardid} />
  </div>
    {isOpen && <Popup coupontext={coupon} setcoupon={setCoupon} modal={isOpen} setModal={setModal} setId={setActiveIndex} activeIndex={activeIndex}/>}
  </>
  );
}
