import { Link } from "react-router-dom"
import searchIcon from "../../assets/icons/search.svg"
import uploadIcon from "../../assets/icons/upload.svg"
import profileImage from '../../assets/images/Mohan-muruge.jpg'

import './NavBar.scss'

function NavBar() {
    return (
        <form className="navbar" >
            <div className="navbar__input-container">
                <img alt="magnifier" className="navbar__search-icon" src={searchIcon} />
                <label className="navbar__label" htmlFor="search"></label>
                <input className="navbar__input" id="search" name="search" placeholder="Search"/>
            </div>
            
            <Link className="navbar__upload" to="/upload">
                <img className="navbar__upload-icon" src={uploadIcon} alt="upload icon"/>
                UPLOAD
            </Link>    
            <div className="navbar__avatar-box">
                <img className="navbar__avatar" src={profileImage} alt="Mogan muruge"/>
            </div>
        </form>
    );
}

export default NavBar;