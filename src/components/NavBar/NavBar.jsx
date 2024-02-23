import searchBar from "../../assets/icons/search.svg"
import uploadBox from "../../assets/icons/upload.svg"
import profilepic from "../../assets/images/Mohan-muruge.jpg"

import './NavBar.scss'

//navbar
function NavBar({}) {
    return(
        <form className="navbar-form">
            <div className="navbar-form__input">
                <img className="navbar-form__search-bar" src={searchBar} alt="search bar" />
                <label className="navbar-form__label"/>
                <input className="navbar-form__input"/>
            </div>   

            <button className="navbar-form__upload" type="submit">
                <img className="navbar-form__upload-box" src={uploadBox} alt="upload box"/>
                UPLOAD
            </button>

            <div className="navbar-form__avatar-container">
                <img className="navbar-form__avatar" src={profilepic} alt="Mohan muruge"/>

            </div>
        </form>
    )
}
export default NavBar;