
import { LotteryCounter } from "./lotteryCounter";
import { useState } from "react";
import "./_banner.scss";
import imgLottery from "../../assets/asset 2.png";
import { Button } from "../shared/button/Button";


export function Banner(props) {
  const [lottery, setLottery] = useState(500);

  setInterval(()=>setLottery(lottery + (lottery*Math.random())/100) ,5000)

  return (
    <>
      <div className={props.className}>
        <div className="lottery-banner">
          <h2 className="lottery-title">win ${Math.round(lottery)} in lottery</h2>
          <LotteryCounter 
          ></LotteryCounter>
          <Button />
        </div>
        <div className="lottery-image-container">
          <img src={imgLottery} alt="" className="lottery-image-container-image" />
        </div>
      </div>
    </>
  );
}
