import { Link } from "react-router-dom";
import logo from "../../assets/logo/BrainFlix-logo.svg"
import NavBar from "../NavBar/NavBar"
import './Header.scss'

//navbar
function Header({update}) {
    
    return(
        <header className="header">
            <Link className="header__link" to="/">
            <img className="header__logo"  src={logo} alt = "Brainflix logo"/>
            </Link>
         <NavBar/>   
    </header>
    )
}
export default Header