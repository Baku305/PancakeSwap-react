import "../../../style.scss";

import "external-svg-loader";

export const VerticalMenu = ({ icon, array, value}) => {
  return (
    <>
      <div className="verticalMenu">
          {array.map((el, i) => {
            return (
              <div className="vericalMenu_content_wrapper" key={i}>
                <div className="verticalMenu_content" onClick={()=>value(`${el.value}`)}>
                  {el.logo && <img src={el.logo} alt="logo"/>}
                  <div className="verticalMenu_name">{el.name}</div>
                  {el.icon && <svg className="verticalMenu_icon" data-src={icon} />}
                  {el.news && <div className="verticalMenu_news">{el.news.toUpperCase()}</div>}
                </div>
                {el.separator && <hr className="separator" />}
                
              </div>
            );
          })}
      </div>
    </>
  );
};
