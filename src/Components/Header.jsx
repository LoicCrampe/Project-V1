import React, { Component } from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return <div>
        <div>
            <img src="./public/Logo.png"/>
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" name="search" />
            </div>
        </div>
    </div>
}

export default Header;