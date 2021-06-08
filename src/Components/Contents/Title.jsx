import React, { Component, useEffect } from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartNonFav } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartFav }  from '@fortawesome/free-solid-svg-icons'

class Title extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favorites: false
        }
        this.ChangeFav = this.ChangeFav.bind(this)
    }

    Fav() {
        if (this.state.favorites) {
            return faHeartFav
        } else {
            return faHeartNonFav
        }
    }

    ChangeFav() {
        this.setState({favorites: !this.state.favorites})
    }
    
    render() {

        return (
            <div className="col-12 DivTitle row text-center">
                <h1>{this.props.Title}</h1>
                <FontAwesomeIcon className="IconFav" icon={this.Fav()} onClick={this.ChangeFav} />
            </div>
        )
    }
}

export default Title;
