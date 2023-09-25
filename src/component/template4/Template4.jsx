import "../template4/template4.scss";
import React,{useRef,useState} from 'react';
import data4 from '../../data4';
import Modal from "../Modal/Modal.jsx";
import Slider from 'react-slick';
import { Popup } from "../popup/Popup";
import {ReactComponent as Ticksvg} from "../../assets/coupontick.svg";
import { ReactComponent as CouponCross } from "../../assets/couponCross.svg";
import  {Dropdown2}  from "../Dropdown2/Dropdown2";
export const Template4 = () => {
 const[currentSlide,setSlide]=useState(0);
 const noOfCards=data4.length;
 const slideToShow=3;
 const[show,setShow]=useState(false);
 const[cardid,setCardId]=useState('');
 const[pricingObj,setPricingObj]=useState({});
 const sliderRef=useRef();
 const[activeIndex,setActiveIndex]=useState(null);
 const[coupon,setCoupon]=useState(null);
 const[isOpen,setIsOpen]=useState(false);
 console.log('19',pricingObj);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipe:false,
    arrows: false,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    autoplay:false,
    className:'mainWrapper5',
  };
  const dropStyle=
  {
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
    fontWeight:'medium',
  };
  const optionstyle=
  {
    color:'#223F80',
    backgroundColor:'#D8EBFF',
  }  
  const arrowcolor='#212121';
  return (
    <>
     <div className='mainCoverwrapper'>
     <img src='https://bestmediainfo.com/uploads/2018/12/Aajtak-HD_1.jpg' alt='Put any url man'/> 
    </div> 
     <h1 style={{textAlign:'center',marginTop:'120px'}}>Choose your subscription</h1>
    <div className="carousalWrapper5">
   <div className="arrowwrapper4" onClick={()=>{sliderRef.current.slickPrev(); setSlide(currentSlide-1)}} 
   style={{
    backgroundColor:'#5CA4EE',
    visibility:currentSlide!==0?'visible':'hidden'
    }}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
    </div>
    <Slider {...settings} ref={sliderRef}>
    { data4.map((item,index)=>
    (
    <>
    <div className="cardmainWrapper">
    <div className="cardStyleweb" style={{backgroundColor:item.primaryColor,
    }}>
    {item.isRecommended && <span className="recommendedTag">RECOMMENDED</span>}
    <div className="cardsubContent">
     <p className="subsDescription" style={{color:item.primaryColor==='#223F80'?'#FFF':'#58AABA'}}>{item.subscriptionName}</p>
     <div className="pricewrapper">
     <h2 className="priceTagStyle5" style={{color:item.primaryColor==='#223F80'?'#FCFFFF':'#000'}}>₹{(item.id===cardid && pricingObj.price) || item.tiers[0].price}</h2>
     <p className="pricetime" style={{color:item.primaryColor==='#223F80'?'#9FB5D6':'#9C9B9E'}}>{(item.id===cardid &&(pricingObj.time==='1 year' || pricingObj.time===undefined ? '/ year': `for ${pricingObj.time}`) || '/ year')}</p>
     </div>
     <div className="originalPricewrapper" style={{color:item.primaryColor==='#223F80'?'#FCFFFF':'#212121'}}>
     <p style={{textDecoration:'line-through'}}>₹{item.originalPrice}</p><p>,Save {item.discount}%</p> 
     </div>
     <p style={{margin:'0px',color:item.cardColor==='#FFF'?'#9C9B9E':'#9FB5D6',fontSize:'14px'}}>Cancel anytime,non-refundable</p>
      {item?.tiers?.length>1 && 
      <Dropdown2 
      setpricing={setPricingObj}
      values={item.tiers}
      styleObj={{...dropStyle,
        backgroundColor:'#D8EBFF',
           color:item.isRecommended?'#FFF':'#000',
           border:`0.5px solid  ${item.buttonColor}`,
      }} 
      optionStyle={optionstyle} 
      cardId={cardid}
      setCardId={setCardId}
      itemId={item.id}
      arrowColor={arrowcolor}
      />
      }
    <button className={`actionmbutton4 ${item.buttonColor==='#5CA4EE'?'subcolor1':'subColor2'}`} style={{color:item.primaryColor}}>{item.buttonPlaceholder}</button>
    {activeIndex!==item.id?
          (<p 
            onClick={()=>{setActiveIndex(item.id); setIsOpen(!isOpen);}}
            className='notappliedcoupon2' 
            style={{color:item.buttonColor}}
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
     <div className="benefitbox">
      <p style={{
        textAlign:'left',
        fontWeight:600,
        marginTop:'11px',
       color:item.textColor, 
      }}>Benefits:</p>
      <div className="benefitlistwrapper">
       {item.benefits.map((it)=>(
       <div className="benefitlistitem"><img src="/tick.png" alt="no-image found"/>
       <span style={{color:item.benefitColor}} className="benefitcontent">{it}</span></div> 
       ))}
      </div> 
     </div>
     </div>
    </div>
    {<p className="offerspace" onClick={()=>{setShow(!show); setCardId(item.id)}} style={{backgroundColor:item.secondaryColor==='#FFF'?'#22355B':'#5CA4EE',color:item.primaryColor==='223F80'?'#FFF':'#FFF'}}>See all offers:</p>}
    </div>
    </>
    ))}
    </Slider>
    <div className="arrowwrapper4"onClick={()=>{sliderRef.current.slickNext(); setSlide(currentSlide+1)}}  
    style={{backgroundColor:'#5CA4EE',visibility:noOfCards-slideToShow===currentSlide?'hidden':'visible'}}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="#FFF" class="w-6 h-6"> 
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
    </svg>
    </div>
    </div>
    <Modal show={show} setShow={setShow} data={data4} cardId={cardid}/>
{isOpen && <Popup coupontext={coupon} setcoupon={setCoupon} modal={isOpen} setModal={setIsOpen} setId={setActiveIndex} activeIndex={activeIndex}/>}
    </>
    );
}
