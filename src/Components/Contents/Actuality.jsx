import React, { Component } from 'react'
import logo from '../../Images/Logo.png'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartUnlike } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartLike }  from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

function Fav(like) {
    if (like) {
        return faHeartLike
    } else {
        return faHeartUnlike
    }
}

class Actuality extends Component {

    constructor(props) {
        super(props)
        this.state = {
            like: this.props.like,
            numberLike: this.props.numberLike,
            numberComments: this.props.numberComments,
            numberShare: this.props.numberShare
        }
    }
    render() {

        return (
        <div className="Center col-12 text-center">
            <div className="PostContent">
                <p>Image, Nom et Prenom de la personne qui post le message + Date et Heures.</p>
                <div className="row col-12">
                    <p className="col-12 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorem laborum officiis mollitia, molestiae quae incidunt natus provident nostrum tempora dolorum excepturi harum? Totam delectus earum animi. Laudantium, ea voluptatum!</p>
                    <img className="col-12 PostImg" src={logo} />
                </div>
            </div>
            <div className="col-12 row justify-content-between">
                <p>{this.state.numberLike} likes</p>
                <p>{this.state.numberComments} commentaires | {this.state.numberShare} partages</p>
            </div>
            <div className="PostOption">
                <FontAwesomeIcon className="IconFav" icon={Fav(this.state.like)} onClick={ () => this.setState({like: !this.state.like })} />
                <FontAwesomeIcon className="IconFav" icon={faComment} />
                <FontAwesomeIcon className="IconFav" icon={faShareAlt} />
                
            </div>
        </div>
        )
    }
}

export default Actuality;