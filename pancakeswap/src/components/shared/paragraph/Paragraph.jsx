import React from "react";
import { Button } from "../button/Button";
import { ThemeContext } from "../../../App";
import { useContext } from "react";

// se ltr è true immagine a dx e testo a sx

export const Paragraph = ({
  title,
  subTitle,
  button,
  learn,
  image1,
  image2,
  image3,
  image4,
  background = "",
  ltr = true,
}) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const backgroundStyle = {
    earnSection: { backgroundColor: "#e9f2f6" },
    tradeSection: { backgroundColor: "white" },
  }[background];

  return (
    <>
      <section className={`section ${theme}-theme `} style={backgroundStyle}>
        <div className="section-content">
          <div className="section-content-title">
            <h2 className={`${theme}-theme`}>
              <span> {title.slice(0, 5)} </span>
              {title.slice(5)}
            </h2>
            <div className="section-content-title-subtitle">
              <p className={`subTitle ${theme}-theme`}>{subTitle}</p>
            </div>
            <div className="section-button-container">
              <div className="section-button-container-default">
                {button}
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
          <div className="section-content-images earn-images">
            <img className="img1" src={image1} alt="bnbCoin || pieChart" />
            <img src={image2} alt="btcCoin || arrowChart" />
            <img
              className="img2"
              src={image3}
              alt="pancakeCoin || coinFolder"
            />
            {image4 && <img src={image4} alt="cake" />}
          </div>
        </div>
      </section>
    </>
  );
};
