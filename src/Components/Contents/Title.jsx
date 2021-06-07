import React, { Component, useEffect } from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartNonFav } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartFav }  from '@fortawesome/free-solid-svg-icons'

function Fav(favorites) {
    if (favorites) {
        return faHeartFav
    } else {
        return faHeartNonFav
    }
}

class Title extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favorites: false
        }
    }
    
    render() {

        return (
            <div className="col-12 DivTitle row text-center">
                <h1>{this.props.Title}</h1>
                <FontAwesomeIcon className="IconFav" icon={Fav(this.state.favorites)} onClick={ () => this.setState({favorites: !this.state.favorites })} />
            </div>
        )
    }
}

export default Title;
