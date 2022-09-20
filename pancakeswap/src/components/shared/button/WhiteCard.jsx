export const WhiteCard = ({icon, title, title2, title2Color , text}) =>{

    return(
        <div className="card-shadow">
        <div className="card-container">
        <div className="card-header">
            {icon}
        </div>
        <div className="card-body">
            {title && <h2>{title}</h2>}
            {title2 && <h2 style={{color: title2Color}} className="card-space-body-footer">{title2}</h2>}
            {text && <p>{text}</p>} 
        </div>
        </div>
        </div>
    )
}

