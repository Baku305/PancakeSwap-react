// import "../../style.scss";
import { useCountdown } from "../../custom hooks/useCountDownMaker";

export function LotteryCounter() {
  const { days, hours, minutes, seconds } = useCountdown("30 oct 2022");

  return (
    <>
      <div className="lottery-counter">
      <div className="lottery-content-wrapper">
          <h2>{days}</h2>
          <h3>d</h3>
        </div>
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
