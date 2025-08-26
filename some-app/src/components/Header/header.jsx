import { useState } from 'react';
import '../Header/header.css';




function Header(){

    const [active, setActive] = useState(false);

    const onClickBurger = () => {
    setActive(!active);
    document.body.classList.toggle('no-scroll');
}
    return(
        <>
        <img className="header-logo" src="./img/icons/logo-black.svg" alt="logo" />
        <div className={active ? "header__burger active" : "header__burger"} onClick={onClickBurger}>
            <span></span>
        </div>
        <nav className={active ? "header-menu active" : "header-menu"}>
            <a className="header-menu_button" href="#" title="Get Started">Get Started</a>
            <a className="header-menu_button" href="#" title="Offers">Offers</a>
            <a className="header-menu_button" href="#" title="About Us">About Us</a>
            <a className="header-menu_button" href="#" title="Log In">Log In</a>
            <a className="header-menu_button" href="#" title="Sign Up">Sign Up</a>
        </nav>
        <button className="header-menu_en">EN</button>
        </>
    );
}

export default Header;