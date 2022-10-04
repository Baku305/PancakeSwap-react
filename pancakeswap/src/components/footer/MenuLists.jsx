import React from "react";
import { footerMenu } from "./data/footerMenu";
import { svgArr } from "./data/svgs"
import "./_footer_MenuLists.scss";

export function MenuLists() {
    return (
        <>
            {/* sezione relativa alla lista dei menu */}
            <div className="footer-section-lists-container">
                {/* mapping dei vari titoli relativi ad ogni menù */}
                {
                    footerMenu.map((item, index) => {
                        return (
                            <div>
                                <div key={item + index} className="footer-section-lists-container-menu-title">{item.title.toUpperCase()}</div>
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
        </>
    )
}
