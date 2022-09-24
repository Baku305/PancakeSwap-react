import { useContext } from "react";
import { ThemeContext } from "../../../App";
import "../../../style.scss";

const STYLES = [
    "btn--default",
    "btn--alternative",
    "btn--info",
    "btn--connect"
]; 

const SIZES = [
    "btn--full"
]

export const Button = ({
    children, 
    buttonStyle,
    buttonSize,
    onClick, 
    type,
    color,
}) => {

    const {theme, updateTheme} = useContext(ThemeContext)

    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0]; 

    const checkButtonSize = SIZES.includes(buttonSize) && buttonSize

    return(
    <button className={`${checkButtonStyle} ${checkButtonSize} ${color} ${theme}-theme`} onClick={updateTheme} type={type}>
    {children}
    </button>
    )
}
