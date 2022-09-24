import { useContext, useState } from "react";
import { ThemeContext } from "../../../../App";
import sun from "../../../../assets/asset 69.svg"
import moon from "../../../../assets/asset 70.svg"
import "external-svg-loader";
import "../../../../style.scss"

export const Checkbox = ({ types }) => {
  const [checked, setChecked] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handlecheck = () => {
    setChecked(!checked);
    updateTheme();
  };

  return (
    types === "theme" ? 
      <div className="switch">
        <input
          checked={checked}
          type="checkbox"
          className={
            theme === "light" ? "switchInputTheme checked" : "switchInputTheme"
          }
        ></input>
        <div className="slider" onClick={handlecheck}>
          <div className="imgWrapper">
            <svg 
          data-src={sun}
          className= "sunSvg"
          />
          <svg 
          data-src={moon}
          className="moonSvg"
          />
          </div>
          
        </div>
      </div>
    
  :
    <div className="switch">
      <input
        checked={checked}
        type="checkbox"
        className={checked ? `switchInput checked ${theme}-theme`  : `switchInput ${theme}-theme`}
      ></input>
      <div className="slider" onClick={()=>setChecked(!checked)}></div>
    </div>
  )

  
  
};
