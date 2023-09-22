import React, { useRef, useState } from 'react';
import data2 from '../../data2.js';
import Slider from 'react-slick';
import { Popup } from '../popup/Popup.jsx';
import Modal from '../Modal/Modal.jsx';
import {ReactComponent as Ticksvg} from "../../assets/coupontick.svg";
import { ReactComponent as CouponCross } from "../../assets/couponCross.svg";
import "../template2/template2.scss";
import {ReactComponent as Tickicon} from "../../assets/squarecheck.svg";
import { Dropdown2 } from '../Dropdown2/Dropdown2.jsx';
export const Template2 = () => {
  const slidesscroll=1;
  const noOfSlides=data2.length;
  const[cardid,setCardId]=useState('');
  const[pricingObj,setPricingObj]=useState({});
  const[show,setShow]=useState(false);
  const[activeIndex,setActiveIndex]=useState(null);
  const[currentSlide,setSlide]=useState(0);
  const[isOpen,setModal]=useState(false);
  const[coupon,setCoupon]=useState(null);
  const[itemid,setId]=useState(0);
  console.log(isOpen);
  console.log(coupon);
  const slideRef=useRef();
  const settings = {
    dots: false,
    infinite: true,
    className:"mainWrapper2",
    speed: 500,
    centerMode:true,
    arrows: false,
    easing:'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
  };  
  const dropStyle=
  {
    background:'#D8EBFF',
    borderRadius:'5px',
    fontFamily:`Roboto,sans-serif`,
    width: '270px',
    border:'0.5px solid #5D5D5D',
    display:'flex',
    padding: '0rem 1rem 0rem 1rem',
    color:'#223F80',
    height:'40px',
    fontSize:'16px',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:'0px',
    fontWeight:'bold',
  };
  const wrapperstyle=
  {
    marginTop:'10px',
  }
  const optionstyle=
  {
    color:'#223F80',
    backgroundColor:'#D8EBFF',
  }  
  return (
    <>
    <div className='mainCoverwrapper'>
     <img src='https://bestmediainfo.com/uploads/2018/12/Aajtak-HD_1.jpg' alt='Put any url man'/> 
    </div>
    <h1 className='subshead'>Choose your Subscription Plan</h1>
    <div className='carousalwrapper2'>
    <div className="arrowwrapper" 
     style={{visibility:currentSlide!==0?'visible':'hidden'}}
     onClick={()=>{slideRef.current.slickPrev(); setSlide(currentSlide-1);}}>
       <img src="/arrowleftblue.png" alt="no"/>
       </div>
    <Slider {...settings} ref={slideRef}>
    {data2.map((item,index)=>(
     <>
    <div className='card1' style={{backgroundColor:item.primaryColor,boxShadow:'5px 10px 30px #00000019;'}}>
      <div className='mainContentWrapper2'> 
       <div className='titlewrapper1'>
       <img className='iconmain' src={`${item.iconUrl}`} alt='no'/>
       <span className='subscriptionTitle' style={{color:item.textColor}}>{item.subscriptionName}
       </span>
       </div>
       <span className='pricetagStyle'><p style={{color:item.textColor}}>
       ₹{item.finalPrice}</p>
       <p className='secText' style={{color:item.cardColor==='#0A083E'?"#9896AA":"#9896AA"}}>/year</p></span>
       <div className='discountText'>
       <p className='originalPrice' style={{color:item.cardColor==='#0A083E'?"#FEFEFE":"#9896AA"}}>
       ₹{item.originalPrice}/year</p>
       ,<p className='offer' style={{color:item.cardColor==='#0A083E'?"#FEFEFE":"#9896AA"}}>
       Save {item.discount}%</p>
       </div>
       <span className='warning2' style={{color:'#9896AA'}}>Cancel anytime,(Non-refundable)</span>
       <div className="mid-wrapper">
       {item?.tiers?.length>1 &&
       <Dropdown2  
       setpricing={setPricingObj}
      values={item.tiers}
      styleObj={dropStyle} 
      optionStyle={optionstyle} 
      wrapperStyle={wrapperstyle}
      cardId={cardid}
      setCardId={setCardId}
      itemId={item.id}
       />
      }
       <div className='cta-wrapper' style={{display:item.isRecommeded?'none':'flex'}}>
       {item?.isRecommended && 
       <button className='actionbutton2' 
       style={{backgroundColor:item.buttonColor,color:item.primaryColor==='#0A083E'?'#F9E1F8':'#E73E88'}}>
       Subscribe</button>
       }
       {activeIndex!==item.id?(
        <div className='notappliedcoupon' style={{display:item.isRecommended?'flex':'none',color:'#E73E88'}}
          onClick={()=>{setModal(true); setId(itemid);}}>Apply Coupon</div>):
       (<span 
       className="appliedcouponstyling">
        <Ticksvg stroke={`#30B73B`} width={14} height={14}  />
       <p>
        {coupon}
        </p>
       <CouponCross className="crossStyle"
         onClick={()=>{setCoupon(null); setActiveIndex(null);}}/>
       </span>)
       }
       </div>
       <hr className='linestyle'/>
       </div>
      <div className='benefitwrapper2'>
      <p className='benefit_heading' style={{color:item.textColor}}>Benefits & offers:</p>
      {item?.benefits?.map((it)=>(
      <div className='benefititem2'>
         <Tickicon className='tick' fill={item.textColor} stroke-width={'8px'}/>  
         <div className='itemText'>
         <span style={{color:item.textColor}}>
         {it}
         </span> 
         </div>   
        </div>
      ))}
      </div>
      <div className='cta-wrapper' style={{display:item.isRecommended?'none':'flex'}}>
      {!item.isRecommended &&
      <button className="actionbutton2"  
      style={{
        backgroundColor:item.buttonColor,
        color:item.buttonTextColor}}
        >
        Subscribe
        </button>
      }
      {!item?.isRecommended && coupon===null?
        (<p 
            onClick={()=>{setActiveIndex(item.id); setModal(!isOpen);}}
            className='notappliedcoupon' 
            style={{color:'#E73E88'}}
            >
            Apply Coupon
           </p>):
      (<span className="appliedcouponstyling" 
      style={{borderRadius:'4px',
      position:'relative',
      display:coupon!=null && itemid=== item.id?'flex':'none',padding:'0px 5px',
      alignItems:'center'}}>
      <p style={{margin:'0',padding:'2px 0px',color:'#30B73B',fontWeight:'bold'}}>{coupon}
      </p>
      </span>)}
      </div>
      </div> 
     </div>
     </>
    ))}
    </Slider> 
    <div className="arrowwrapper" style={{visibility:currentSlide!==noOfSlides-slidesscroll?'visible':'hidden'}} onClick={()=>{slideRef.current.slickNext(); setSlide(currentSlide+1)}}>
       <img src="/arrowrightblue.png" alt="no"/>
      </div>
    </div>    
    <Modal show={show} setShow={setShow} data={data2} cardId={cardid}/>
    {
      isOpen && <Popup couponText={coupon} setId={setId} modal={isOpen} setModal={setModal} setcoupon={setCoupon}/>
    }
    </>
  )
}
