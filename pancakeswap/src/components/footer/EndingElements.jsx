import React from "react";
import { Checkbox } from "../shared/form/checkbox/Checkbox";
import { languageList } from "../../data/data";
import pancakeLogoButton from "../../assets/asset 43.svg";
import { useState } from "react";
import { VerticalMenu } from "../shared/vericalMenu/VerticaMenu";
import { Button } from "../shared/button/Button";
import { svgArr } from "./data/svgs";
import { UseFetchApi } from "./../../custom hooks/useFetchApi";


export function EndingElements() {
    const [pancakeTokenPrice, setPancakeTokenPrice] = useState("0");
    const {
        data: pancakeTokenData,
        error: pancakeTokenError,
        isLoading: pancakeTokenIsLoading,
      } = UseFetchApi(
        "https://api.pancakeswap.info/api/v2/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
      );
      
    

    return (
        <>
            <div className="ending-items-container">
                <div className="ending-items-container-left-items">
                    <Checkbox types="theme" />
                    <div className="ending-items-container-left-items-hidden-globe-menu">
                        <div>{svgArr[9].icon}</div>
                        <h4 className="next-globe-h4">EN</h4>
                        <VerticalMenu array={languageList} />
                    </div>
                </div>



                <div className="ending-items-container-right-items">
                    <div className="pancake-asset-value-wrapper">
                        <img
                            src={pancakeLogoButton}
                            alt=""
                            className="pancake_asset_value_wrapper"
                        />
                        {<h4>{pancakeTokenPrice}</h4>}
                        {/* <h4 className="">$4.470</h4> */}
                    </div>
                    <Button buttonStyle={"btn--connect"}>Buy CAKE{svgArr[8].icon}</Button>
                </div>
            </div>



        </>
    )
}