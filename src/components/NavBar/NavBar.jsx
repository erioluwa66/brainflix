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
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__input-wrapper">
                <img alt="magnifier" className="search-form__search-icon" src={searchIcon} />
                <label className="search-form__label" htmlFor="search"></label>
                <input className="search-form__input" type="text" name="search" placeholder="Search"/>
            </div>
            
                <button className="search-form__submit" type="submit">UPLOAD</button>
                <img className="search-form__submit-icon" src={uploadIcon} alt="upload icon"/>
                  

            <div className="search-form__avatar-box">
                <img className="search-form__avatar" src={profileImage} alt="Mogan muruge"/>
            </div>

        </form>
    )
}

export default NavBar;