import React from "react";
import { svgArr } from "./data/svgs"
import { telegramMenuLanguages } from "./data/telegramMenuLanguages";
import "./_footer_SocialBar.scss";

export function SocialBar() {
    return (
        <>
            {/* sezione relativa alle icone social */}
            <div className="social-icons-container">
                <a className="b" href="https://twitter.com/pancakeswap" target="_blank" rel="noreferrer noopener">
                    <div>{svgArr[1].icon}</div>
                </a>
                <div className="social-icons-container-hidden-telegram-menu c">
                    <div>{svgArr[2].icon}</div>
                    <div className="social-icons-container-hidden-telegram-menu-list">
                        {telegramMenuLanguages.map((item, index) => <a key={index + item} className="hidden-telegram-menu-list-mapped-a" href={item.href} target="_blank">{item.language}</a>)}
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
        </>
    )
}


