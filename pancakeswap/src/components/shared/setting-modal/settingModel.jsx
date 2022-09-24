import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "../../../style.scss";
import { Checkbox } from "../form/checkbox/Checkbox";
import { Button } from "../button/Button";

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
  return (
    <>
      {isOpen && (
        <div>
          <div className="wrapper" onClick={() => setIsOpen(false)}></div>
          <div isOpen={isOpen} className="settingModal">
            {array.map((el) => (
              <div className="settingModalList">
                <h3 className="settingModalListTitle">{el.title}</h3>
                {el.content.map((content) => (
                  <>
                    {/* <div className="settingModalListContent">
                      <h4>{content.title}</h4>
                      {content.selector === "checkbox" ? (
                        <Checkbox types={content.selectorType} />
                      ) : (
                        content.selectorNumber.map((sN)=>
                        <Button buttonStyle={content.selectorType} children = {<span>{sN}</span>} />
                        )
                      )}
                    </div> */}
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
