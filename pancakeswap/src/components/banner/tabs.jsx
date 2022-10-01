import { Banner } from "./banner";
import { Banner2 } from "./Banner_2";
// import "../../style.scss";


import { SlideButton } from "./slideButton";

import { useVisibilityOnOff } from "../../custom hooks/useVisibiliyOnOff";


export function Tabs() {


  const {visibility, setVisibility} = useVisibilityOnOff(1)

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
