import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "../../../style.scss";

export function MyDialog({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div>
          <div className="wrapper" onClick={()=>setIsOpen(false)}></div>
          <div isOpen={isOpen} className="settingModalWrapper">
            <button onClick={() => setIsOpen(false)}></button>
          </div>
        </div>
      )}
    </>
  );
}
