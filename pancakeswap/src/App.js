import "./style.scss";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Button } from "./components/shared/button/Button";
import { color } from "./components/Color";
import { Navbar } from "./components/navbar/navbar";
import { Tabs } from "./components/banner/tabs";
import { MoonSection } from "./components/MoonSection/the-moon-section";
import { VerticalMenu } from "./components/shared/vericalMenu/VerticaMenu";
import verticalMenuIcon from "./assets/asset 41.svg";

function App() {
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
      content: [
        { name: "Farms" },
        { name: "Pools" },
      ],
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
        { name: "swap" },
        { name: "limit" },
        { name: "liquidity" },
        { name: "perpetual", icon: true },
        { name: "bridge", icon: true },
      ],
    },
  ];

  return (
    <>
      <Navbar menu={menu} />
      <div>
        <MoonSection />
      </div>
      <Routes>
        <Route path="/1" element={<Button buttonStyle={"btn--default"} />} />
        <Route
          path="/2"
          element={
            <Button buttonSize={"btn--full"} type="button" as={Link} to="/">
              Esempio
            </Button>
          }
        />
      </Routes>
    </>
  );
}

export default App;
