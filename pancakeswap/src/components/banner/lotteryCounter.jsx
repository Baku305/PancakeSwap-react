import { useEffect } from "react";
import { useState } from "react";
import "./_lotteryCounter.scss";
import { useCountdown } from "../../custom hooks/useCountDownMaker";

export function LotteryCounter() {
  const { days, hours, minutes, seconds } = useCountdown("30 sep 2022");

  const [amount, setAmount] = useState({});

  useEffect(() => {
    return () => setAmount({ days, hours, minutes, seconds });
  }, [days, hours, minutes, seconds]);

  return (
    <>
      <div className="lottery-counter" style={{ display: "flex", gap: "10px" }}>
        <div className="lottery-content-wrapper">
          <h2>{hours}</h2>
          <h3>h</h3>
        </div>
        <div className="lottery-content-wrapper">
          <h2>{minutes}</h2>
          <h3>m</h3>
        </div>
        <div className="lottery-content-wrapper">
          <h2>{seconds}</h2>
          <h3>s</h3>
        </div>
      </div>
    </>
  );
}
