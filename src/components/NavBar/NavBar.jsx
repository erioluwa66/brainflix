import searchBar from "../../assets/icons/search.svg"
import uploadBox from "../../assets/icons/upload.svg"
import profilepic from "../../assets/images/Mohan-muruge.jpg"

import './NavBar.scss'

//navbar
function NavBar({}) {
    
    return(
        <form className="navbar"> 
            <div className="navbar__container">
                <img className="navbar__search-bar" src={searchBar} alt={searchBar} />
                <label className="navbar__label" htmlFor="search"/>
                <input className="navbar__input" type="text" name="search" placeholder="Search"/>
            </div>   

            <button className="navbar__upload" type="submit">
                <img className="navbar__upload-icon" src={uploadBox} alt="upload box"/>
                UPLOAD
            </button>

            <div className="navbar__avatar-container">
                <img className="navbar__avatar" src={profilepic} alt="Mohan muruge"/>
            </div>
        </form>
    )
}
export default NavBar