import "./style.scss";
import { Route, Routes } from "react-router-dom";
import { Button } from "./components/shared/button/Button";
import { menu } from "./data/data";
import { Navbar } from "./components/navbar/navbar";

import { MoonSection } from "./components/MoonSection/the-moon-section";

import { CardsIntro } from "./components/BuildTrustSection/CardsIntro";
import WinMilionsInPrizes from "./components/winMilionsInPrizes/WinMilionsInPrizes";
import React from "react";
import { useTheme } from "./custom hooks/UseTheme";

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
                <MoonSection/>
                <CardsIntro/>
                <WinMilionsInPrizes/>
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
