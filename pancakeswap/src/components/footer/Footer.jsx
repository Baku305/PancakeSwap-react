import React from "react";
import { Button } from "../shared/button/Button";
import "./_footer.scss";

const about = ["Contact", "Brand", "Blog", "Community", "Litepaper", "--", "Online store"]
const help = ["Customer Support", "Troubleshooting", "Guides"]
const developers = ["Github", "Documentation", "Bug Bounty", "Audits", "Careers"]


export function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-lists-container">
                <ul>
                    <span>ABOUT</span>
                    {about.map((item) => <li key={item}>{item}</li>)}

                </ul>
                <ul>
                    <span>HELP</span>
                    {help.map((item) => <li key={item}>{item}</li>)}

                </ul>
                <ul>
                    <span>DEVELOPERS</span>
                    {developers.map((item) => <li key={item}>{item}</li>)}

                </ul>
                <img style={{width:"100px", height: "100px"}} src="./img1.png" alt="img"></img>
            </div>
        </div>
    )
}