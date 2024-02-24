import logo from "../../assets/logo/BrainFlix-logo.svg"
import search from "../../assets/icons/search.svg"
import upload from "../../assets/icons/upload.svg"
import './Header.scss'

//navbar
function Header({}) {
    
    return(
        <header className="header">
            <img className="header__logo"  src={logo} alt = "Brainflix logo"/>
        <form className="form"> 
            <input className="form__search" type="text" placeholder="Search"/>
            <img className="form__search-logo" src={search} alt="magnifier"  />
            <label className="form__label" htmlFor="search"></label>           
            <div className="form__upload">
                <div className="form__upload--buton">
                    <button className="form__upload--button__text" type="submit">UPLOAD</button>
                    <img className="form__upload--button__logo" src={upload} alt="form button logo"/>
                </div>
                <div alt="profile picture" className="form__profile"></div>                  
            </div>
        </form>
    </header>
    )
}
export default Header