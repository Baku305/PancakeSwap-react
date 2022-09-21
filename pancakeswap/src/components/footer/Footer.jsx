import React from "react";
import { Button } from "../shared/button/Button";
import "./_footer.scss";

//1)creare array di oggetti contenenti label e href da mappare!!
//2)creare un array unico contenente le tre intestazioni ed in ognuna di queste inserire
//il relativo oggetto della cat
const about = ["Contact", "Brand", "Blog", "Community", "Litepaper", "--", "Online store"]
const help = ["Customer Support", "Troubleshooting", "Guides"]
const developers = ["Github", "Documentation", "Bug Bounty", "Audits", "Careers"]

const footerMenu = [
    {
        title: "About",
        menu: [
            {
                label: "Contact",
                href: "#",
            },
            {
                label: "Brand",
                href: "#",
            },
            {
                label: "Blog",
                href: "#",
            },
            {
                label: "Community",
                href: "#",
            },
            {
                label: "Litepaper",
                href: "#",
            },
            {
                label: "--",
                href: "#",
            },
            {
                label: "Online store",
                href: "#",
            }
        ]

    },
    {
        title: "Help",
        menu: [
            {
                label: "Customer Support",
                href: "#"
            },
            {
                label: "Troubleshooting",
                href: "#"
            },
            {
                label: "Guides",
                href: "#"
            },
        ]
    },
    {
        title: "Developers",
        menu: [
            {
                label: "Github",
                href: "#"
            },
            {
                label: "Documentation",
                href: "#"
            },
            {
                label: "Bug Bounty",
                href: "#"
            },
            {
                label: "Audits",
                href: "#"
            },
            {
                label: "Careers",
                href: "#"
            },
        ]
    }
]

console.log(footerMenu[0].menu[0].label);


export function Footer(props) {
    return (
        <div className="footer">
            <div>
                <ul>
                    {/* viene renderizzato male. Ogni titolo deve stare in cima
                    ad ogni lista/menu... perché non funziona? DA AGGIUSTARE!!!! */}
                    <div className="footer-lists-container">
                        {footerMenu.map((item, index) => <div className="title" key={index}>{item.title}</div>)}
                            <ul>
                                {footerMenu.map((item) => item.menu.map((item, index) => <li key={index + item}>{item.label}</li>))}
                            </ul>
                        <img style={{ width: "100px", height: "100px" }} src="./img1.png" alt="img"></img>
                    </div>
                </ul>
            </div>
        </div>
    )
}

