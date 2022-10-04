import React from "react";

import { MenuLists } from "./MenuLists";
import { SocialBar } from "./SocialBar";
import { EndingElements } from "./EndingElements";

export function Footer(props) {
    return (
        <>
            <div className="footer-section">
                <MenuLists />
                <SocialBar />
                <EndingElements />
            </div>
        </>
    )
}








