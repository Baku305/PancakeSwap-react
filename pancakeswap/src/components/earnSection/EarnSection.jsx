import { Paragraph } from "../shared/paragraph/Paragraph";
import pieChart from "../../assets/asset 15.png";
import arrowChart from "../../assets/asset 16.png";
import coinFolder from "../../assets/asset 17.png";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export const EarnSection = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={`BackgroundSecond ${theme}-theme`}>
        <Paragraph
          title="Earn passive income with crypto."
          subTitle="PancakeSwap makes it easy to make your crypto work for you."
          learn="Learn"
          button="Explore"
          image1={pieChart}
          image2={arrowChart}
          image3={coinFolder}
          //background={"earnSection"}
          ltr={true}
        />
      </div>
    </>
  );
};
