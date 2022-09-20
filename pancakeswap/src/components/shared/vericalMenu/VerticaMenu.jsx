import "../../../style.scss";

import "external-svg-loader"

const array = [
  { name: "swap" },
  { name: "limit" },
  { name: "liquidity" },
  { name: "perpetual", icon: true },
  { name: "bridge", icon: true },
];

export const VerticalMenu = ({ icon , array}) => {
  return (
    <>
      <div className="verticalMenu">
        <div >
          {array.map((el, i) => {
            return (
              <div className="verticalMenu_content" key={i}>
                <div className="verticalMenu_name">{el.name}</div>
                {el.icon && (
                    //<img src={icon} alt="icon" />
                    <svg
                    className="verticalMenu_icon"
                    data-src = {icon}
                    />
               )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
