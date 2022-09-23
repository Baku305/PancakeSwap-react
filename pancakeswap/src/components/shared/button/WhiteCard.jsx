import { useContext } from "react";
import { ThemeContext } from "../../../App";

export const WhiteCard = ({ icon, title, title2, title2Color, text }) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  return (
      <div className="card-shadow">
        <div className={`${theme}-theme card-container`}>
          <div className="card-header">{icon}</div>
          <div className="card-body">
            {title && <h2>{title}</h2>}
            {title2 && (
              <h2
                style={{ color: title2Color }}
                className="card-space-body-footer"
              >
                {title2}
              </h2>
            )}
            {text && <p>{text}</p>}
          </div>
        </div>
      </div>
  );
};
