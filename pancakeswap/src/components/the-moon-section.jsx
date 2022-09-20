import "../style.scss";

import { Button } from './Button';

export function MoonSection() {


    return (
        <>
            <div className="theMoonSection-wrapper">
                <section className="theMoonSection">
                    <div className="theMoonSection-external-container">
                        <div className="theMoonSection-leftTitle-container">
                            <h1>The moon is made of pancakes.</h1>
                            <h3>
                                Trade, earn, and win crypto on the most popular decentralized platform
                                in the galaxy.
                            </h3>
                            <div className="theMoonSection-buttons-container">
                                <Button buttonStyle={"btn--default"}>Connect wallet</Button>
                                <Button buttonStyle={"btn--alternative"}>Trade Now</Button>
                            </div>
                        </div>
                        <div className="theMoonSection-floatingimgs-container">
                            <img className="theMoonSection-star1" src="../../src/assets/asset 0.png" alt="" />
                            <img className="theMoonSection-star2" src="../../src/assets/asset 10.png" alt="" />
                            <img className="theMoonSection-star3" src="../../src/assets/asset 9.png" alt="" />
                            <img className="theMoonSection-rabbit1" src="../../src/assets/asset 8.png" alt="coniglio maledetto" />                        </div>
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