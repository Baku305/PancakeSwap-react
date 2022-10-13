import { Paragraph } from "../shared/paragraph/Paragraph";
import coin1 from "../../assets/asset 27.png";
import coin2 from "../../assets/asset 28.png";
import pancakeToken from "../../assets/asset 29.png";
import coin3 from "../../assets/asset 30.png";
import { MiniCard } from "./MiniCard";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export const CakeSection = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={`Background ${theme}-theme`}>
        <Paragraph
          title="CAKE makes our world go round"
          subTitle="CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!"
          learn="Learn"
          button="Buy CAKE"
          image1={coin1}
          image2={coin2}
          image3={pancakeToken}
          image4={coin3}
        />
        <MiniCard />
      </div>
    </>
  );
};
