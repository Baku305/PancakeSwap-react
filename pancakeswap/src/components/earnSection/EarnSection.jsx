import { Paragraph } from "../shared/paragraph/Paragraph";
import pieChart from "../../assets/asset 15.png";
import arrowChart from "../../assets/asset 16.png";
import coinFolder from "../../assets/asset 17.png";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { TopEarnTabs } from "../topEarnTabs/topEarnTabs";
import { topFarmsData, topSyrupPoolsData } from "../../data/data";

export const EarnSection = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <>
      {/* <div className="svgEarnSectionSeparator ">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
        </svg>
      </div> */}
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
        <TopEarnTabs data1={topFarmsData} data2={topSyrupPoolsData}/>
      </div>
    </>
  );
};
