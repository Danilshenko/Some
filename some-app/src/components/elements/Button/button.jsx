import'../Button/button.css'

function Button({variant = 'primary', children}) {

    return(
        <button className={`button ${variant}`}>{children}</button>
    )
}

export default Button;