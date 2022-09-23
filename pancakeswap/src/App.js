import "./style.scss";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Button } from "./components/shared/button/Button";
import { color } from "./components/Color";
import { Navbar } from "./components/navbar/navbar";
import { Tabs } from "./components/banner/tabs";
import { MoonSection } from "./components/MoonSection/the-moon-section";
import { VerticalMenu } from "./components/shared/vericalMenu/VerticaMenu";
import verticalMenuIcon from "./assets/asset 41.svg";
import { CardsIntro } from "./components/BuildTrustSection/CardsIntro";
import React from "react";
import { useTheme } from "./UseTheme";

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
    },
    {
      name: "earn",
      content: [{ name: "Farms" }, { name: "Pools" }],
    },
    {
      name: "win",
      content: [
        { name: "Trading competition" },
        { name: "Prediction (Beta)" },
        { name: "Lottery" },
        { name: "Pottery" },
      ],
    },
    {
      name: "nft",
      content: [
        { name: "Overview" },
        { name: "Collections" },
        { name: "Activity" },
      ],
    },
    {
      name: "···",
      content: [
        { name: "Info" },
        { name: "IFO" },
        { name: "Voting", separator: true },
        { name: "Leaderboard", separator: true },
        { name: "Blog", icon: true },
        { name: "Docs", icon: true },
      ],
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
              <Button buttonStyle="btn--default" type="button" />
            </div>
          }
        />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
