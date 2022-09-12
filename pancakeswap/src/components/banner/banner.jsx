
import { LotteryCounter } from "./lotteryCounter";
import { useState } from "react";
import "./_banner.scss";
import imgLottery from "../../assets/asset 2.png";
import imgLotteryMobile from "../../assets/lotteryMobile.png"
import arrowButton from "../../assets/asset 56.svg"
import { Button } from "../shared/button/Button";


export function Banner(props) {
  const [lottery, setLottery] = useState(500);

  setInterval(()=>setLottery(lottery + (lottery*Math.random())/100) ,5000)

  return (
    <>
      <div className={props.className}>
        <div className="lottery-banner">
          <h2 className="lottery-title">Win ${Math.round(lottery)} in lottery</h2>
          <LotteryCounter 
          ></LotteryCounter>
          <div className="button_wrapper">
          <Button buttonSize = "btn--full" children={<div className="button_label">Play Now <img src = {arrowButton} alt= "->"></img></div>}/>
          </div>
        </div>
        <div className="lottery-image-container">
          <img src={imgLottery} alt="" className="lottery-image-container-image" />
          <img src={imgLotteryMobile} alt="" className="lottery-image-container-image-mobile" />
        </div>
      </div>
    </>
  );
}
