import "./style.scss";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Button } from "./components/shared/button/Button";

import { Navbar } from "./components/navbar/navbar";

import { MoonSection } from "./components/MoonSection/the-moon-section";

import { CardsIntro } from "./components/BuildTrustSection/CardsIntro";
import React from "react";
import { useTheme } from "./UseTheme";
import tradeMobileIcon from "./assets/trade_menu_icon_vuota.svg";
import earnMobileIcon from "./assets/earn_menu_icon_vuota.svg";
import winMobileIcon from "./assets/win_menu_icon_vuota.svg";
import nftMobileIcon from "./assets/nft_menu_icon_vuota.svg";
import dotsMobileIcon from "./assets/dots_menu_icon.svg";

export const ThemeContext = React.createContext();

function App() {

  const [theme, updateTheme] = useTheme();

  const Navigate = useNavigate();

  const menu = [
    {
      name: "trade",
      content: [
        { name: "Swap" },
        { name: "Limit" },
        { name: "Liquidity" },
        { name: "Perpetual", icon: true },
        { name: "Bridge", icon: true },
      ],
      icon: tradeMobileIcon,
    },
    {
      name: "earn",
      content: [{ name: "Farms" }, { name: "Pools" }],
      icon: earnMobileIcon
    },
    {
      name: "win",
      content: [
        { name: "Trading competition" },
        { name: "Prediction (Beta)" },
        { name: "Lottery" },
        { name: "Pottery" },
      ],
      icon:winMobileIcon
    },
    {
      name: "nft",
      content: [
        { name: "Overview" },
        { name: "Collections" },
        { name: "Activity" },
      ],
      icon:nftMobileIcon
    },
    {
      name: "...",
      content: [
        { name: "Info" },
        { name: "IFO" },
        { name: "Voting", separator: true },
        { name: "Leaderboard", separator: true },
        { name: "Blog", icon: true },
        { name: "Docs", icon: true },
      ],
      icon: dotsMobileIcon
    },
  ];

  

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <Navbar menu={menu} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
                <MoonSection/>
                <CardsIntro/>
            </div>
          }
        />
        <Route
          path="/2"
          element={
            <div>
              <MoonSection/>
              <Button buttonStyle="btn--default" types="button" />
            </div>
          }
        />
        
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
