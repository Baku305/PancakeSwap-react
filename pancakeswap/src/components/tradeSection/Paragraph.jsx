import React from "react";
import { Button } from "../shared/button/Button";
import "./_paragraph.scss";
import "../shared/button/_button.scss";
import bnbCoin from "../../assets/asset 12.png";
import btcCoin from "../../assets/asset 13.png";
import pancakeCoin from "../../assets/asset 14.png";

// interface Props {
//   display: string;
//   justifyContent: string;
//   alignItems: string;
//   flexDirection?: string;
//   width?: string;
//   height?: string;
// }

// const Paragraph: React.FC<Props> = ({
//   display, justifyContent, alignItems, flexDirection, width, height
// }) => {
//   return(
//     <div> </div>

//   )
// }

// se ltr è true immagine a dx e testo a sx

export const Paragraph = ({
  title,
  subTitle,
  text,
  learn,
  image1,
  image2,
  image3,
  style,
  images,
  background = false,
  ltr = true,
}) => {
  const backgroundStyle = {
    backgroundColor: `$greyMouse`,
  };
  return (
    <>
      <section className="tradeSection">
        <div className="tradeSection-content">
          <div className="tradeSection-content-title">
            <h2>
              <span> {title.slice(0, 5)} </span>
              {title.slice(5)}
            </h2>
            <div className="tradeSection-content-title-subtitle">
              <p className="subTitle">{subTitle}</p>
            </div>
            <div className="tradeSection-button-container">
              <div className="tradeSection-button-container-default">
                <Button buttonStyle={"btn--default"}>{text}</Button>
              </div>
              <a className="tradeSection-button-container-link" href="">
                {learn}
              </a>
            </div>
          </div>
          <div className="tradeSection-content-images">
            <img className="img1" src={image1} alt="bnbCoin || pieChart" />
            <img src={image2} alt="btcCoin || arrowChart" />
            <img
              className="img2"
              src={image3}
              alt="pancakeCoin || coinFolder"
            />
          </div>
        </div>
      </section>

      <section class="earnSection">
        <div class="earnSection-content">
          <div class="earnSection-content-title">
            <h2>
              {title}
              {/* <span>Earn</span> passive income with crypto. */}
            </h2>
            <div class="earnSection-content-title-subtitle">
              <p class="subTitle">
                {/* PancakeSwap makes it easy to make your crypto work for you. */}
                {subTitle}
              </p>
            </div>
            <div class="earnSection-button-container">
              {/* <div class="earnSection-button-container-default">Trade now</div> */}
              <a class="earnSection-button-container-link" href="">
                Learn
              </a>
            </div>
          </div>
          <div className="earnSection-content-images">
            <img className="img1" src="assets/asset 15.png" alt="" />
            <img src="assets/asset 16.png" alt="" />
            <img className="img2" src="assets/asset 17.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
