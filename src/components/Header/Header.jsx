import NavBar from "../NavBar/NavBar";
import logo from "../../assets/logo/BrainFlix-logo.svg"

import './Header.scss'

function Header({}) {
    return (
        <nav>
            <img src={logo} alt = "Brainflix logo"/>
            <NavBar/>
        </nav>
    )
}

export default Header;