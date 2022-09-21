import React from "react";
import { Button } from "../shared/button/Button";
import "../../style.scss";
import "../shared/button/_button.scss";

// se ltr è true immagine a dx e testo a sx

export const Paragraph = ({
  title,
  subTitle,
  button,
  learn,
  image1,
  image2,
  image3,
  background = "",
  ltr = true,
}) => {
  const backgroundStyle = {
    earnSection: { backgroundColor: "#e9f2f6" },
    tradeSection: { backgroundColor: "white" },
  }[background];

  return (
    <>
      <section className="section" style={backgroundStyle}>
        <div
          className="section-content"
          style={{
            flexDirection: ltr === false ? "row-reverse" : "row",
            justifyContent: ltr === false ? "normal" : "space-between",
            paddingBottom: ltr === false ? "60px" : "",
          }}
        >
          <div className="section-content-title">
            <h2>
              <span> {title.slice(0, 5)} </span>
              {title.slice(5)}
            </h2>
            <div className="section-content-title-subtitle">
              <p className="subTitle">{subTitle}</p>
            </div>
            <div className="section-button-container">
              <div className="section-button-container-default">
                <Button buttonStyle={"btn--default"}>{button}</Button>
              </div>
              <a
                className="section-button-container-link"
                href="https://docs.pancakeswap.finance"
                target="_blank"
                rel="noreferrer"
              >
                {learn}
              </a>
            </div>
          </div>
          <div
            className="section-content-images"
            style={{ marginRight: ltr === false ? "50px" : "" }}
          >
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
    </>
  );
};
