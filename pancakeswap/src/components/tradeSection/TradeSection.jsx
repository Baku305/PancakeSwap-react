import { Paragraph } from "../shared/paragraph/Paragraph";
import bnbCoin from "../../assets/asset 12.png";
import btcCoin from "../../assets/asset 13.png";
import pancakeCoin from "../../assets/asset 14.png";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export const TradeSection = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <>
      {/* <div className={`svgFeedbackSectionSeparator ${theme}-theme`}>
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className={`${theme}-theme`}
        >
          <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
        </svg>
      </div> */}
      <div className={`Background ${theme}-theme`}>
        <Paragraph
          title="Trade anything. No registration, no hassle."
          subTitle="Trade any token on BNB Smart Chain in seconds, just by connecting your wallet."
          learn="Learn"
          button="Trade now"
          image1={bnbCoin}
          image2={btcCoin}
          image3={pancakeCoin}
          //background={"tradeSection"}
          ltr={true}
        />
      </div>
    </>
  );
};
