import React from "react";
import "./paragraph.css";

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

export const Paragraph = () => {
  return (
    <div>
      <section class="tradeSection">
        <div class="tradeSection-content">
          <div class="tradeSection-content-title">
            <h2>
              <span>Trade</span> anything. No registration, no hassle.
            </h2>
            <div class="tradeSection-content-title-subtitle">
              <p class="subTitle">
                Trade any token on BNB Smart Chain in seconds, just by
                connecting your wallet.
              </p>
            </div>
            <div class="tradeSection-button-container">
              <div class="tradeSection-button-container-default">Trade now</div>
              <a class="tradeSection-button-container-link" href="">
                Learn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
