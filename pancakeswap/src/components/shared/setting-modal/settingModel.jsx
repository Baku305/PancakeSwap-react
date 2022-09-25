import React, { useState, useContext } from "react";
import "../../../style.scss";
import { Checkbox } from "../form/checkbox/Checkbox";
import { Button } from "../button/Button";
import { ThemeContext } from "../../../App";
import closeIcon from "../../../assets/asset 38.svg"
import infoIcon from "../../../assets/infoIcon.svg"
export const settingArray = [
  {
    title: "global",
    content: [
      {
        title: "dark mode",
        selector: "checkbox",
        selectorType: "theme",
        selectorNumber: 1,
        
      },
      {
        title: "Subgraph Health Indicator",
        selector: "checkbox",
        selectorType: "normal",
        selectorNumber: 1,
        info: "Turn on NFT market subgraph health indicator all the time. Default is to show the indicator only when the network is delayed",
      },
      {
        title: "Default Transaction Speed (GWEI)",
        selector: "button",
        selectorType: "btn--connect",
        selectorNumber: ["standard (5)", "fast (6)", "instant (7)"],
        info: "Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees"
      },
    ],
  },
];

export function MyDialog({ isOpen, setIsOpen, array }) {
  const { theme } = useContext(ThemeContext);
  const [btnSelected, setBtnSelected] = useState();
  const [onCloseClassName, setOnCloseClassName] = useState("")

  const handleClose = () => {
    setOnCloseClassName("isOpenfalse")
    setTimeout(()=>{setIsOpen(false) ; setOnCloseClassName("")},400)
  }


  return (
    <>
      {isOpen && (
        <div>
          <div className="wrapper" onClick={handleClose}></div>
          <div className={`settingModal ${theme}-theme ${onCloseClassName}`}>
            <div className={`wrapperTitle ${theme}-theme`}>
              <h3 className="settingModalTitle">Settings</h3>
              <button className="wrapperTitleButton" onClick={handleClose}>
                <svg
                data-src={closeIcon}
                />
              </button>
            </div>
            {array.map((el, i) => (
              <div key={i} className={`settingModalList ${theme}-theme`}>
                <h3 className={`settingModalListTitle ${theme}-theme`}>{el.title}</h3>
                {el.content.map((content, i) => (
                  <>
                    {content.selector === "checkbox" ? (
                      <div key={i} className={`settingModalListContent ${theme}-theme`}>
                        <div className="settingModalListContentTitle">
                          <h4>{content.title}</h4>
                          {content.info && (
                            <div className="settingModalListContentTitleInfo">
                              <svg
                              data-src={infoIcon}
                              className={`${theme}-theme`}
                              />
                              <div className="settingModalListContentTitleInfoText"><h4>{content.info}</h4></div>
                            </div>
                          )}
                        </div>
                        <Checkbox types={content.selectorType} />
                      </div>
                    ) : (
                      <div key={i} className={`settingModalListContentButton ${theme}-theme`}>
                        <div className="settingModalListContentButtonTitle">
                          <h4>{content.title}</h4>
                          {content.info && (
                            <div className="settingModalListContentTitleInfo">
                              <svg
                              data-src={infoIcon}
                              className={`${theme}-theme`}
                              />
                              <div className={`settingModalListContentTitleInfoText ${theme}-theme`}><h4>{content.info}</h4></div>
                            </div>
                          )}
                        </div>
                        <div className={`buttonWrapper ${theme}-theme`}>
                          {content.selectorNumber.map((sn, i) => (
                            <div
                              onClick={() => setBtnSelected(i)}
                              className={btnSelected === i && "btnSelected"}
                            >
                              <Button
                                key={i}
                                buttonStyle={content.selectorType}
                                children={<span>{sn}</span>}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
