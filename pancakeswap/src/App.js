import "./App.scss";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Button } from "./components/shared/button/Button";
import { color } from "./components/Color";
import { Navbar } from "./components/navbar/navbar";
import { Tabs } from "./components/banner/tabs";
import { Paragraph } from "./components/tradeSection/Paragraph.jsx";
import bnbCoin from "../src/assets/asset 12.png";
import btcCoin from "../src/assets/asset 13.png";
import pancakeCoin from "../src/assets/asset 14.png";
import pieChart from "../src/assets/asset 15.png";
import arrowChart from "../src/assets/asset 16.png";
import coinFolder from "../src/assets/asset 17.png";
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

      <div>
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

        <Paragraph
          title="Earn passive income with crypto."
          subTitle="PancakeSwap makes it easy to make your crypto work for you."
          learn="Learn"
          button="Explore"
          image1={pieChart}
          image2={arrowChart}
          image3={coinFolder}
          background={"earnSection"}
          ltr={false}
        />
      </div>
      <Routes>
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
      </Routes>
    </>
  );
}

export default App;
