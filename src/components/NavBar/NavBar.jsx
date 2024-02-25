import searchIcon from "../../assets/icons/search.svg"
import uploadIcon from "../../assets/icons/upload.svg"
import profileImage from '../../assets/images/Mohan-muruge.jpg'

import './NavBar.scss'


//navbar element
const NavBar = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form className="navbar" onSubmit={handleSubmit}>
            <div className="navbar__input-container">
                <img alt="magnifier" className="navbar__search-icon" src={searchIcon} />
                <label className="navbar__label" htmlFor="search"></label>
                <input className="navbar__input" type="text" name="search" placeholder="Search"/>
            </div>
            
                <button className="navbar__submit" type="submit">UPLOAD</button>
                <img className="navbar__submit-icon" src={uploadIcon} alt="upload icon"/>
                  

            <div className="navbar__avatar-box">
                <img className="navbar__avatar" src={profileImage} alt="Mogan muruge"/>
            </div>

        </form>
    )
}

export default NavBar;