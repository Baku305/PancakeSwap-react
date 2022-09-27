import "../../style.scss";

export const MiniCard = () => {
  return (
    <>
      <div className="MiniCard">
        <div className="MiniCardContent" style={{ gridArea: "a / a / a / a" }}>
          <p>Circulating Supply</p>
          <h4>147,801,676</h4>
        </div>
        <div
          className="MiniCardContent"
          style={{
            gridArea: "b / b / b / b",
            borderLeft: "1px solid rgb(215, 202, 236)",
          }}
        >
          <p>Total supply</p>
          <h4>315,049,370</h4>
        </div>
        <div
          className="MiniCardContent"
          style={{
            gridArea: "c / c / c / c",
            borderLeft: "1px solid rgb(215, 202, 236)",
          }}
        >
          <p>Max Supply</p>
          <h4>750,000,000</h4>
        </div>
        <div
          className="MiniCardContent MarketCap"
          style={{ gridArea: "d / d / d / d" }}
        >
          <p>Market cap</p>
          <h4>$500 million</h4>
        </div>
        <div
          className="MiniCardContent"
          style={{
            gridArea: "e / e / e / e",
            borderLeft: "1px solid rgb(215, 202, 236)",
          }}
        >
          <p>Burned to date</p>
          <h4>522,506,102</h4>
        </div>
        <div
          className="MiniCardContent"
          style={{
            gridArea: "f / f / f / f",
            borderLeft: "1px solid rgb(215, 202, 236)",
          }}
        >
          <p>Current emissions</p>
          <h4>13.75/block</h4>
        </div>
      </div>
    </>
  );
};
