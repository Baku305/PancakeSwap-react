import "./style.scss";
import { Route, Routes } from "react-router-dom";
import { Button } from "./components/shared/button/Button";
import { menu } from "./data/data";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/Footer"
import { MoonSection } from "./components/MoonSection/the-moon-section";

import { CardsIntro } from "./components/BuildTrustSection/CardsIntro";
import WinMilionsInPrizes from "./components/winMilionsInPrizes/WinMilionsInPrizes";
import React from "react";

import { useTheme } from "./custom hooks/UseTheme";
import tradeMobileIcon from "./assets/trade_menu_icon_vuota.svg";
import earnMobileIcon from "./assets/earn_menu_icon_vuota.svg";
import winMobileIcon from "./assets/win_menu_icon_vuota.svg";
import nftMobileIcon from "./assets/nft_menu_icon_vuota.svg";
import dotsMobileIcon from "./assets/dots_menu_icon.svg";
import { TradeSection } from "./components/tradeSection/TradeSection";
import { EarnSection } from "./components/earnSection/EarnSection";
import { CakeSection } from "./components/cakeSection/CakeSection";


export const ThemeContext = React.createContext();

function App() {

  const [theme, updateTheme] = useTheme();


  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <Navbar menu={menu} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MoonSection />
              <CardsIntro />
              <TradeSection />
              <EarnSection />
              <WinMilionsInPrizes/>
              <CakeSection />
            </div>
          }
        />
        <Route
          path="/2"
          element={
            <div>
              <MoonSection />
              <Button buttonStyle="btn--default" types="button" />
            </div>
          }
        />
      </Routes>
      {/* <Footer/> */}
    </ThemeContext.Provider>
  );
}

export default App;
