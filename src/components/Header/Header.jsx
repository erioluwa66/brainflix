import logo from "../../assets/logo/BrainFlix-logo.svg"
import NavBar from "../NavBar/NavBar"
import './Header.scss'

//navbar
function Header({update}) {
    
    return(
        <header className="header">
            <img className="header__logo"  src={logo} alt = "Brainflix logo"/>
         <NavBar/>   
    </header>
    )
}
export default Header