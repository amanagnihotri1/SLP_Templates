import style from "../Modal/Modal.module.scss";
import { useState } from "react";
import {ReactComponent as ArrowIcon} from "../../assets/arrowIcon.svg";
import {ReactComponent as CheckIcon} from "../../assets/checkiconformodal.svg"
import reactIcon from "../../assets/crossIcon.png";
const Modal = ({show,setShow,data,cardId,popupStyle}) => {
  console.log(data,cardId);
  const [toggle, setToggle] = useState("benefits");
  const [stYle, setStyle] = useState('110px');
  const[border,setBorder]=useState('none');
  return (
    <>
      {show ? (
        <div className={style["modalContainer"]} onClick={() => {setShow(); setStyle('110px')}}>
          <div className={style["modal-sub-container"]}>
            <div className={style["close"]} onClick={() => {setShow(!show); setStyle('110px')}}>
              <img src={reactIcon} alt="crossIcon"/>
            </div>
            <div
              className={style["modal"]} style={{backgroundColor:data[cardId]?.primaryColor,color:data[cardId]?.benefitColor}}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={style["header"]}>
                <div 
                  className={
                    toggle === "benefits"
                      ? style["header-Active"]
                      : style["header-Inactive"]
                  }
                  style={{color:data[cardId]?.benefitColor}}
                  onClick={() =>{ setToggle("benefits"); setBorder(`2px solid ${data[cardId]?.benefitColor}`)}}
                >
                  Benefits
                </div>
                <div
                  className={
                    toggle === "offers"
                      ? style["header-Active"]
                      : style["header-Inactive"]
                  }
                  onClick={() => setToggle("offers")}
                >
                  Offers
                </div>
              </div>
              <div className={style["benefit"]} style={{ height: stYle,boxShadow:`inset 0px -11px 8px -10px ${data[cardId].primaryColor}`}}>
                    {toggle === "benefits" ? 
                    (<div className={style["benefit-list"]}>
                    {data[cardId]?.benefits?.map((ele)=>(
                      <div className={style["benefit-listwrapper"]}>
                       <div className={style["benefiticonwrapper"]}>
                        <CheckIcon fill={data[cardId].benefitColor} width={12} height={12}
          
                        />
                        </div>
                        <div style={{ marginTop: "-2px" ,color:data[cardId].benefitColor}} >
                         {ele}
                        </div>
                        </div>
                    ))}
                       </div>
                    ) : (
                      <>
                      {data[cardId]?.offers?.map((it)=>(
                      <div className={style["offer-list"]}>
                        <div className={style["offer-img"]}>
                          <img
                            className={style["offer-img"]}
                            src={it.iconUrl}
                            alt="img"
                          />
                        </div>
                        <div className={style["offer-title"]}>
                         {it.offerText}
                        </div>
                      </div>
                      ))}
                      </>
                    )
                  }
              </div>
              <div className={style["view-more"]}>
                <div onClick={()=>stYle==='200px'?setStyle('110px'):setStyle('200px')} style={{color:data[cardId].benefitColor}}>view more</div>
                <div>
                 <ArrowIcon  fill={data[cardId].benefitColor}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;