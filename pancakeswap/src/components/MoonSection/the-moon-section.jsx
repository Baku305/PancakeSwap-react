import "../../style.scss";
import Image1 from "../../assets/asset 11.png"
import Star2 from "../../assets/asset 10.png"
import Star3 from "../../assets/asset 9.png"
import Rabbit1 from "../../assets/asset 8.png"
import { Button } from '../shared/button/Button';
import {Tabs} from "../banner/tabs"
import { ThemeContext } from "../../App";
import { useContext, useEffect, useState } from "react";

export function MoonSection() {


    const {theme, updateTheme} = useContext(ThemeContext)

    return (
        <>
            <div className={`theMoonSection-wrapper ${theme}-theme`} >
                <Tabs/>
                <section className="theMoonSection">
                    <div className="theMoonSection-external-container">
                        <div className="theMoonSection-leftTitle-container">
                            <h1 className={`${theme}-theme`}>The moon is made of pancakes.</h1>
                            <h3 className={`${theme}-theme`}>
                                Trade, earn, and win crypto on the most popular decentralized platform
                                in the galaxy.
                            </h3>
                            <div className="theMoonSection-buttons-container">
                                <Button buttonStyle={"btn--default"}>Connect wallet</Button>
                                <Button buttonStyle={"btn--alternative"}>Trade Now</Button>
                                
                            </div>
                        </div>
                        <div className="theMoonSection-floatingimgs-container">
                            <img className="theMoonSection-star1" src={Image1} alt="" />
                            <img className="theMoonSection-star2" src={Star2} alt="" />
                            <img className="theMoonSection-star3" src={Star3} alt="" />
                            <img className="theMoonSection-rabbit1" src={Rabbit1} alt="coniglio maledetto" />                       
                            </div>
                        </div>
                </section>
                <svg className="svgMoonSectionSeparator" viewBox="0 0 1660 339" width="100%" fill="url('#paint0_linear_light')"
                    xmlns="http://www.w3.org/2000/svg" className="svgMoonSectionSeparator">
                    <path
                        d="M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z">
                    </path>
                    <defs>
                        <linearGradient id="paint0_linear_light" x1="830" y1="84" x2="830" y2="339">
                            <stop stop-color="white" stop-opacity="0.78"></stop>
                            <stop offset="0.566389" stop-color="white" stop-opacity="0.35"></stop>
                            <stop offset="1" stop-color="white"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>
    )
}