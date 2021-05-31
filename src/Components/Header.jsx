import React from 'react'
import logo from '../Images/Logo.png'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return <div id="Header" className="container row col-12">
        <div className="searchBar col-2 offset-1">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Recherche..." />
        </div>
        <div className="divLogo col-6">
            <img src={logo} className="logo" alt={"logo"}/>
        </div>
        <div className="accountHeader col-2">
            <img src={logo} className="imgAccount" alt={""}/>
            <p className="textAccount">Mon compte</p>
        </div>
    </div>
}

export default Header;