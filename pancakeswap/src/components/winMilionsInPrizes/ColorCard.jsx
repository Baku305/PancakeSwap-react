import { Button } from '../shared/button/Button'; 

export const ColorCard = ({icon, tagline, title, subtitle, text, text2, buttonContent, white, background, shadow, rotation}) =>{
    return(
        <div className="color-card-container" style={background && {background: background, border: `1px solid ${shadow}`, filter: `drop-shadow(0px 3px 0px  ${shadow})`, transform: `rotate(${rotation})`}}>
            <div className="color-card-header">
                {icon}
            </div>

            <div className="color-card-body">
                <p className="color-card-tagline" style={white && {color: "#ffffff"}}>{tagline}</p>
                <h2 className="color-card-title" style={white && {color: "#ffb237"}}>{title}</h2>
                <h2 className="color-card-subtitle" style={white && {color: "#ffffff"}}>{subtitle}</h2>
                <p className="color-card-paragraph" style={white && {color: "#ffffff"}}>{text}</p>
                <p className="color-card-paragraph" style={white && {color: "#ffffff"}}>{text2}</p>
            </div>

            <div className="color-card-footer">
                <Button 
                children={buttonContent}
                buttonSize="btn--full"/>
            </div>
         </div>

    )
}