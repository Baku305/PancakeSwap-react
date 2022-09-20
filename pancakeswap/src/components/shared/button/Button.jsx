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

    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0]; 

    const checkButtonSize = SIZES.includes(buttonSize) && buttonSize

    return(
    <button className={`${checkButtonStyle} ${checkButtonSize} ${color}`} onClick={onClick} type={type}>
    {children}
    </button>
    )
}
