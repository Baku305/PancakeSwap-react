import "../../../style.scss";

import "external-svg-loader";

export const VerticalMenu = ({ icon, array }) => {
  return (
    <>
      < div className="verticalMenu">
          {array.map((el, i) => {
            return (
              <div className="vericalMenu_content_wrapper" key={i}>
                <div className="verticalMenu_content">
                  <div className="verticalMenu_name">{el.name}</div>
                  {el.icon && <svg className="verticalMenu_icon" data-src={icon} />}
                </div>
                {el.separator && <hr className="separator" />}
              </div>
            );
          })}
      </div>
    </>
  );
};
