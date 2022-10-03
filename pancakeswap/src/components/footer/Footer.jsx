import React from "react";
import "./_footer.scss";
import { footerMenu } from "./data/footerMenu";
import { telegramMenuLanguages } from "./data/telegramMenuLanguages";
import "external-svg-loader";
import { svgArr } from "./data/svgs"


export function Footer(props) {
    return (
        <>
            <div className="footer-section">
                <div className="footer-section-lists-container">
                    {/* mapping dei vari titoli relativi ad ogni menù */}
                    {
                        footerMenu.map((item, index) => {
                            return (
                                <div key={item + index}>
                                    <div className="footer-section-lists-container-menu-title">{item.title.toUpperCase()}
                                    </div>
                                    {/* all'interno di ogni ul, annidato, troviamo il mapping dei singoli elementi <li> contenenti i tag <a> di riferimento ai vari link. Qui mappiamo a sua volta la proprietà "menu" dell'oggetto footerMenu la quale rappresenta un array di oggetti. Estraiamo quindi la label per ogni <li> */}
                                    <ul className="footer-section-lists-container-ul-menu">
                                        {item.menu.map((menuItem) =>
                                            <li key={item + index} >
                                                <a href={menuItem.href} style={menuItem.color ? { color: menuItem.color } : { color: "white" }} target="_blank" rel="noreferrer noopener">{menuItem.label}</a>
                                            </li>)}
                                    </ul>

                                </div>
                            )
                        })
                    }
                    <div>{svgArr[0].icon}</div>
                </div>

                {/* sezione relativa alle icone social */}
                <div className="social-icons-container">
                    <a className="b" href="https://twitter.com/pancakeswap" target="_blank" rel="noreferrer noopener">
                        <div>{svgArr[1].icon}</div>
                    </a>
                    <div className="social-icons-container-hidden-telegram-menu c">
                        <div>{svgArr[2].icon}</div>
                        <div className="social-icons-container-hidden-telegram-menu-list">
                            {telegramMenuLanguages.map((item) => <a className="hidden-telegram-menu-list-mapped-a" href={item.href} target="_blank">{item.language}</a>)}
                        </div>

                    </div>
                    <a className="b" rel="noreferrer noopener" href="https://reddit.com/r/pancakeswap" target="_blank">
                        <div>{svgArr[3].icon}</div>
                    </a>
                    <a className="b" rel="noreferrer noopener" href="https://instagram.com/pancakeswap_official" target="_blank">
                        <div>{svgArr[4].icon}</div>
                    </a>
                    <a className="b" rel="noreferrer noopener" href="https://github.com/pancakeswap/" target="_blank">
                        <div>{svgArr[5].icon}</div>
                    </a>
                    <a className="b" rel="noreferrer noopener" href="https://discord.gg/pancakeswap" target="_blank">
                        <div>{svgArr[6].icon}</div>
                    </a>
                    <a className="b" rel="noreferrer noopener" href="https://medium.com/pancakeswap" target="_blank">
                        <div>{svgArr[7].icon}</div>
                    </a>

                </div>

            </div>
        </>
    )
}






