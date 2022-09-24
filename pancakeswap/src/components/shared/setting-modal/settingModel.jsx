import React, { useState, Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "../../../style.scss";
import { Checkbox } from "../form/checkbox/Checkbox";
import { Button } from "../button/Button";
import { ThemeContext } from "../../../App";

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
      },
      {
        title: "Default Transaction Speed (GWEI)",
        selector: "button",
        selectorType: "btn--connect",
        selectorNumber: ["standard(5)", "fast(6)", "instant(7)"],
      },
    ],
  },
];



export function MyDialog({ isOpen, setIsOpen, array }) {
  
  const {theme} = useContext(ThemeContext)
  
  return (
    <>
      {isOpen && (
        <div>
          <div className="wrapper" onClick={() => setIsOpen(false)}></div>
          <div isOpen={isOpen} className = {`settingModal ${theme}-theme`}>
            {array.map((el) => (
              <div className="settingModalList">
                <h3 className="settingModalListTitle">{el.title}</h3>
                {el.content.map((content) => (
                  <>
                    {content.selector === "checkbox" ? (
                      <div className="settingModalListContent">
                        <h4>{content.title}</h4>
                        <Checkbox types={content.selectorType} />
                      </div>
                    ) : (
                      <div className="settingModalListContentButton">
                        <h4>{content.title}</h4>
                        <div className = "buttonWrapper">
                        {content.selectorNumber.map((sn) => (
                            <Button
                              buttonStyle={content.selectorType}
                              children={<span>{sn}</span>}
                            />
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
