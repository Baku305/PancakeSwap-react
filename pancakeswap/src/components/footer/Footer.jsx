import React from "react";
import "./_footer.scss";
import { MenuLists } from "./MenuLists";
import { SocialBar } from "./SocialBar";

export function Footer(props) {
    return (
        <>
            <div className="footer-section">
                <MenuLists />
                <SocialBar />
            </div>
        </>
    )
}








