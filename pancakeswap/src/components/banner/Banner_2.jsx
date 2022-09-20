import "../../style.scss";
import imgTrade from "../../assets/perpetual.webp";
import { Button } from "../shared/button/Button";

export function Banner2(props) {


  return (
    <>
      <div className={props.className}>
        <div className = "tradeBanner-content">
          <h2 className="tradeBanner-title">win $1000 in lottery</h2>
          <h1> UP TO 100x LEVERAGE</h1>
          <Button />
        </div>
        <div className="tradeBanner-image-container">
          <img src={imgTrade} alt="" className="tradeBanner-image-container-image" />
        </div>
      </div>
    </>
  );
}