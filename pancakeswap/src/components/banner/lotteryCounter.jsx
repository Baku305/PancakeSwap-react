import { useEffect } from "react";
import { useState } from "react";
import "./_lotteryCounter.scss";
import { useCountdown } from "../../custom hooks/useCountDownMaker";

export function LotteryCounter() {
  const {days, hours, minutes, seconds} = useCountdown("30 sep 2022");

  const [amount,setAmount] = useState({})

  useEffect(()=>{
    return ()=>setAmount({days, hours, minutes, seconds})
  },[days, hours, minutes, seconds])

  return (
    <>
      <div className="lottery-counter" style={{ display: "flex", gap: "10px" }}>
        <h2>{hours}h</h2>
        <h2>{minutes}m</h2>
        <h2>{seconds}s</h2>
      </div>
    </>
  );
}
