import "../../style.scss";
import imgTrade from "../../assets/perpetual.webp";
import imgTradeMobile from "../../assets/perpetualMobile.webp";
import { Button } from "../shared/button/Button";
import arrowButton from "../../assets/asset 56.svg";
export function Banner2(props) {
  return (
    <>
      <div className={props.className}>
        <div className="tradeBanner-content">
          <div className="tradeBanner-title">
            <h2> Perpetual futures</h2>
            <h2> Up to 100× Leverage</h2>
          </div>
          <div className="button_wrapper">
            <Button
              buttonSize="btn--full"
              children={
                <div className="button_label">
                  Trade now <img src={arrowButton} alt="->"></img>
                </div>
              }
            />
          </div>{" "}
        </div>
        <div className="tradeBanner-image-container">
          <img
            src={imgTrade}
            alt=""
            className="tradeBanner-image-container-image"
          />
          <img
            src={imgTradeMobile}
            alt=""
            className="tradeBanner-image-container-image-mobile"
          />
        </div>
      </div>
    </>
  );
}
