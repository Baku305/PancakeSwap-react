import { Banner } from "./banner";
import { Banner2 } from "./Banner_2";
import { useEffect, useState } from "react";
import "../../style.scss";


import { SlideButton } from "./slideButton";

import { UseFetchApi } from "../../custom hooks/useFetchApi";

const tokensApi = "https://api.pancakeswap.info/api/v2/tokens"
const pairsApi = "https://api.pancakeswap.info/api/v2/pairs"
const summaryApi = "https://api.pancakeswap.info/api/v2/summary"

export function Tabs() {

  const {
    data,
    error,
    isLoading
  } = UseFetchApi(pairsApi)
  
  const [visibility, setVisibility] = useState(1);


  //*visibility fnc
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (visibility === 1) {
  //       setVisibility((v)=> v = 1);
  //     } else if (visibility === 2) {
  //       setVisibility((v) => v = 1);
  //     }
  //   }, 5000);


  //     console.log(data)

  //   return () => clearInterval(interval)

  // }, [visibility,data]);

  //*button setting

  return (
    <div className="tabs-container">
      <div className="tabs-content">
        {visibility === 1 ? (
          <Banner className="lottery-container" />
        ) : (
          <Banner2 className="tradeBanner-container" />
        )}
      </div>
      <div className="slideButton-container">
        <SlideButton
          className={visibility === 1 ? "slideButton bg-actived-button" : "slideButton"}
          onClick={() => setVisibility((v) => v = 1)}
          id="Slide1Bt"
        ></SlideButton>
        <SlideButton
          className={visibility === 2 ? "slideButton bg-actived-button" : "slideButton"}
          onClick={() => setVisibility((v)=> v = 2)}
          id="Slide2Bt"
        ></SlideButton>
      </div>
    </div>
  );
}
