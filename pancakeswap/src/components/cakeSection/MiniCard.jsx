import { ThemeContext } from "../../App";
import { useContext } from "react";

export const MiniCard = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={`MiniCard`}>
        <div className="MiniCardContent" style={{ gridArea: "a / a / a / a" }}>
          <p className={`${theme}-theme`}>Circulating Supply</p>
          <h4 className={`${theme}-theme`}>147,801,676</h4>
        </div>
        <div
          className={`MiniCardContent borderSeparator ${theme}-theme`}
          style={{
            gridArea: "b / b / b / b",
          }}
        >
          <p className={`${theme}-theme`}>Total supply</p>
          <h4 className={`${theme}-theme`}>315,049,370</h4>
        </div>
        <div
          className={`MiniCardContent borderSeparator ${theme}-theme`}
          style={{
            gridArea: "c / c / c / c",
          }}
        >
          <p className={`${theme}-theme`}>Max Supply</p>
          <h4 className={`${theme}-theme`}>750,000,000</h4>
        </div>
        <div
          className={`MiniCardContent  ${theme}-theme`}
          style={{ gridArea: "d / d / d / d" }}
        >
          <p className={`${theme}-theme`}>Market cap</p>
          <h4 className={`${theme}-theme`}>$500 million</h4>
        </div>
        <div
          className={`MiniCardContent borderSeparator  ${theme}-theme`}
          style={{
            gridArea: "e / e / e / e",
          }}
        >
          <p className={`${theme}-theme`}>Burned to date</p>
          <h4 className={`${theme}-theme`}>522,506,102</h4>
        </div>
        <div
          className={`MiniCardContent borderSeparator  ${theme}-theme`}
          style={{
            gridArea: "f / f / f / f",
          }}
        >
          <p className={`${theme}-theme`}>Current emissions</p>
          <h4 className={`${theme}-theme`}>13.75/block</h4>
        </div>
      </div>
    </>
  );
};
