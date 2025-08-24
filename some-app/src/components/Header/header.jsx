import '../Header/header.css';
import '../../styles/style.css';

function Header(){
    return(
        <>
        <img className="header-logo" src="./img/icons/logo-black.svg" alt="logo" />
        <div className="header__burger">
            <span></span>
        </div>
        <nav className="header-menu">
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