import { Paragraph } from "../shared/paragraph/Paragraph";
import bnbCoin from "../../assets/asset 12.png";
import btcCoin from "../../assets/asset 13.png";
import pancakeCoin from "../../assets/asset 14.png";

export const TradeSection = () => {
  return (
    <>
      <div className="TradeSection">
        <div className="svgFeedbackSectionSeparator">
          <svg
            viewBox="0 0 1660 48"
            preserveAspectRatio="none"
            fill="white"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z" />
          </svg>
        </div>
        <Paragraph
          title="Trade anything. No registration, no hassle."
          subTitle="Trade any token on BNB Smart Chain in seconds, just by connecting your wallet."
          learn="Learn"
          button="Trade now"
          image1={bnbCoin}
          image2={btcCoin}
          image3={pancakeCoin}
          background={"tradeSection"}
          ltr={true}
        />
      </div>
    </>
  );
};
