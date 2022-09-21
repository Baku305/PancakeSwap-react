import { Paragraph } from "../shared/paragraph/Paragraph";
import "../../style.scss";
import bnbCoin from "../../assets/asset 12.png";
import btcCoin from "../../assets/asset 13.png";
import pancakeCoin from "../../assets/asset 14.png";

export const TradeSection = () => {
  return (
    <>
      <Paragraph
        title="Trade everything. No registration, no hassle"
        subTitle="Trade any token on BNB Smart Chain in seconds, just by connecting your wallet."
        learn="Learn"
        button="Trade now"
        image1={bnbCoin}
        image2={btcCoin}
        image3={pancakeCoin}
        background={"tradeSection"}
        ltr={true}
      />
    </>
  );
};
