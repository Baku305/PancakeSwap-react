import "../../../style.scss";

import "external-svg-loader";

export const VerticalMenu = ({ icon, array }) => {
  return (
    <>
      <div className="verticalMenu">
        <div>
          {array.map((el, i) => {
            return (
              <>
                <div className="verticalMenu_content" key={i}>
                  <div className="verticalMenu_name">{el.name}</div>
                  {el.icon && <svg className="verticalMenu_icon" data-src={icon} />}
                </div>
                {el.separator && <hr className="separator" />}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
