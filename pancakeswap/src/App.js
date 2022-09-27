import "./App.scss";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Button } from "./components/shared/button/Button";
import { color } from "./components/Color";
import { Navbar } from "./components/navbar/navbar";
import { Tabs } from "./components/banner/tabs";
import { TradeSection } from "./components/tradeSection/TradeSection";
import { EarnSection } from "./components/earnSection/EarnSection.jsx";
import { CakeSection } from "./components/cakeSection/CakeSection";

function App() {
  const Navigate = useNavigate();

  const menu = [
    { name: "trade" },
    { name: "earn" },
    { name: "win" },
    { name: "nft" },
    { name: "···" },
  ];

  return (
    <>
      <h1 className="tiffanyBrand">The moon is made of pancakes.</h1>
      <h1 color="pinkBrand">The moon is made of pancakes.</h1>
      <h1 className="violetBrand">The moon is made of pancakes.</h1>
      <Navbar menu={menu} />
      <div>
        <Tabs />
      </div>

      <TradeSection />

      <EarnSection />

      <CakeSection />

      {/* <Routes>
        <Route
          path="/"
          element={
            <Button
              color="violetBrand"
              onClick={() => Navigate("/2")}
              buttonStyle={"btn--default"}
            >
              ciao
            </Button>
          }
        />
        <Route path="/1" element={<Button buttonStyle={"btn--default"} />} />
        <Route
          path="/2"
          element={
            <Button buttonSize={"btn--full"} type="button" as={Link} to="/">
              Esempio
            </Button>
          }
        />
      </Routes> */}
    </>
  );
}

export default App;
