import "../template3/template3.scss";
import React, { useRef,useState } from 'react';
import data3 from '../../data3.js';
import Slider from "react-slick";
import { Dropdown2 } from "../Dropdown2/Dropdown2";
import { Popup } from "../popup/Popup";
import {ReactComponent as CheckIcon} from "../../assets/checkiconformodal.svg";
import {ReactComponent as Ticksvg} from "../../assets/coupontick.svg";
import { ReactComponent as CouponCross } from "../../assets/couponCross.svg";
import Modal from "../Modal/Modal";
export const Template3 = () => {
const[pricingObj,setPricingObj]=useState({});
const[isOpen,setModal]=useState(false);
const[activeIndex,setActiveIndex]=useState(null);
const[coupon,setCoupon]=useState(null);
const[currSlide,setSlide]=useState(0);
const[show,setShow]=useState(false);
const[cardId,setCardId]=useState(null);
const noOfCards=data3.length;
const SlideToScroll=3;
  const settings = {
    dots: false,
    infinite: true,
    className:'mainWrapper3',
    speed: 400,
    arrows: false,
    swipe:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide:true,
    autoplay:false,
  }; 
  const dropStyle={
    borderRadius:'5px',
    fontFamily:`Roboto,sans-serif`,
    width: '270px',
    border:'none',
    cursor:'pointer',
    display:'flex',
    padding: '0rem 1rem 0rem 1rem',
    height:'40px',
    fontSize:'16px',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:'0px',
    fontWeight:'bold',
  }; 
  const slideRef=useRef();
  return (
        <>
        <div className='mainCoverwrapper3'>
        <img src='https://bestmediainfo.com/uploads/2018/12/Aajtak-HD_1.jpg'alt='Put any url man'/> 
       </div>
       <h1 className='subshead'>Choose your Subscription Plan</h1>
       <div className='carousalwrapper3'>
       <div
    className="arrowwrapper0"  
    style={{backgroundColor:data3[0].primaryColor,visibility:currSlide!==0?'visible':'hidden'}}
    onClick={()=>{slideRef.current.slickPrev(); setSlide(currSlide-1)}}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
    </div>
      <Slider {...settings} ref={slideRef}>
      {data3.map((item,ind)=>(
      <>
      <div className='card3' 
       style={{
        backgroundColor:`${item.primaryColor}`,
        }}
        >
         <div className='mainContentWrapper3'> 
          <div className='titlewrapper3'>
          <span className='subscriptionTitle3' style={{color:item.textColor}}>{item.subscriptionName}</span>
          </div>
          <span className='pricemain'>
          <p className='offerPrice' style={{color:item.textColor}}>₹{(item.id===cardId && pricingObj.price) || item.tiers[0].price}</p>
          {(item.id===cardId &&(pricingObj.time==='1 year' || pricingObj.time===undefined ? <p className="secText" style={{color:item?.textColor}}>/year</p>: <p className="secText6" style={{color:item.textColor}}>{`for ${pricingObj.time}`}</p>) || <p className="secText" style={{color:item.textColor}}>/year</p>)}
          </span>
          <div 
          className='discountText'>
          <p className='originalPrice' 
          style={{color:item.isRecommended?"#FEFEFE":"#9896AA"}}>₹999/year
          </p>
          <p className='offer' 
          style={{color:item.isRecommended?"#FFF":"#93918F"}}
          >, Save {item.discount}%
          </p>
          </div>
          <span className='warning' style={{color:item.isRecommended?"#FFF":"#93918F"}}>Cancel anytime,(Non-refundable)</span>
           { 
           <div style={{visibility:item?.tiers?.length>1?'visible':'hidden'}}>
           <Dropdown2 
           setpricing={setPricingObj}
           values={item.tiers}
           styleObj={{...dropStyle,
           backgroundColor:item.dropdownColor,
           color:item.textColor,
           border:`0.5px solid ${item.isRecommended?'transparent':'#000'}`,
           outline:'none',
           }} 
           optionStyle={{backgroundColor:item.primaryColor, color:item.textColor}} 
           cardId={cardId}
           setCardId={setCardId}
           itemId={item.id}
           arrowColor={item.textColor}
           />
          </div>
           }
          <button className={`actionbutton3 ${item.isRecommended?'recommendedColor':'notRecommended'}`}>{item?.id===cardId && (coupon!=='' && coupon!=undefined)?`Proceed ₹ ${pricingObj?.price}`: `Subscribe`}</button>
          {activeIndex!==item.id?
           (<p 
            onClick={()=>{setActiveIndex(item.id); setModal(!isOpen);}}
            className='notappliedcoupon2' 
            style={{color:item.textColor}}
            >
            Apply Coupon
           </p>):
           (coupon!=null &&<span 
       className="appliedcouponstyling2">
        <Ticksvg stroke={`#30B73B`} className='checkIconStyle' />
       <p>
        {coupon}
        </p>
       <CouponCross className="crossStyle"
         onClick={()=>{setCoupon(null); setActiveIndex(null);}}/>
       </span>)  
           }
         </div>
         <div className='benefitwrapper'>
         <p className='benefit_heading3' style={{color:item.textColor}}>Benefits</p>
         { item.benefits.map((it)=>(
         <div className='benefititem3'>
             <CheckIcon fill={item.textColor} />
            <div className='itemText'>
            <span style={{color:item.textColor}}>
            {it}
            </span> 
            </div>   
           </div>
         ))}
         </div>
         <hr 
         style={{
          border:`1px solid ${item.textColor}`,
          width:'273px',
          marginLeft:'6%',
          marginTop:'40px',
          marginBottom:'0px',
          }}
          />
         <div className="offerwrapper">
          <p className="offertext" style={{color:item.textColor}}>Offers:</p>
         <div className="offercardwrapper">
        {item?.offers?.slice(0,2).map((ele)=>(  
         <div className="offercard">
          <div className="offericon"><img src={ele.iconUrl} alt="not available"/></div>   
          <p className="offerdetailtext" style={{color:item.cardColor==='#BE0A1F'?"#2E6542":"#000"}}>{ele.offerText}</p>
         </div>    
      ))}
         </div>
         {item?.offers &&<p className="revealarea" style={{color:item.textColor}} onClick={()=>{setShow(!show); setCardId(item.id)}}>More</p>} 
         </div>
        </div>
        </>
       ))}
       </Slider>
       <div
    className="arrowwrapper0"
    style={{backgroundColor:data3[0].primaryColor,visibility:currSlide!==noOfCards-SlideToScroll?'visible':'hidden'}}
    onClick={()=>{slideRef.current.slickNext(); setSlide(currSlide+1) 
    }}  
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="#FFF" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
</svg>
    </div>
       </div>
       <Modal show={show} setShow={setShow} data={data3} cardId={cardId}/>
       {isOpen && <Popup coupontext={coupon} setcoupon={setCoupon} modal={isOpen} setModal={setModal} setId={setActiveIndex} activeIndex={activeIndex}/>}    
       </>
  )
}
