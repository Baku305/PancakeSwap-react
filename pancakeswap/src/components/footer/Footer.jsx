import React from "react";

import { MenuLists } from "./MenuLists";
import { SocialBar } from "./SocialBar";
import { EndingElements } from "./EndingElements";

export function Footer(props) {
    return (
        <>
            <div className="footer-section">
                <div className="footer-section-wrapper">
                    <MenuLists />
                    <SocialBar />
                    <EndingElements />
                </div>
            </div>
        </>
    )
}








