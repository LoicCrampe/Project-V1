import React, { Component } from 'react'
import logo from '../../Images/Logo.png'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartUnlike } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartLike }  from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

class Actuality extends Component {

    constructor(props) {
        super(props)
        this.state = {
            like: this.props.like,
            numberLike: this.props.numberLike,
            numberComments: this.props.numberComments,
            numberShare: this.props.numberShare,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            imageProfil: this.props.imageProfil,
            date: this.props.date
        }
        this.Like = this.Like.bind(this)
    }

    Fav() {
        if (this.state.like) {
            return faHeartLike
        } else {
            return faHeartUnlike
        }
    } 

    Like() {
        this.setState({like: !this.state.like})
        if (this.state.like) {
            this.setState({numberLike: this.state.numberLike - 1 })
        } else {
            this.setState({numberLike: this.state.numberLike + 1 })
        }
    }

    render() {

        return (
        <div className="Center col-12 text-center">
            <div className="PostContent">
                <div className="col-12 row justify-content-end">
                    <img src={this.props.imageProfil} height={"50px"} className="text-right" />
                    <p className="text-right font-italic align-self-center mb-0">{this.state.firstName} {this.state.lastName}</p>
                </div>
                <div className="row col-12">
                    <p className="col-12 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorem laborum officiis mollitia, molestiae quae incidunt natus provident nostrum tempora dolorum excepturi harum? Totam delectus earum animi. Laudantium, ea voluptatum!</p>
                    <img className="col-12 PostImg" src={logo} />
                </div>
            </div>
            <div className="col-12 row justify-content-between">
                <p>{this.state.numberLike} likes</p>
                <p>{this.state.numberComments} commentaires | {this.state.numberShare} partages</p>
            </div>
            <div className="col-12 row justify-content-between">
                <div className="text-left pl-0">
                    <p className="font-italic mb-0">{this.state.date}</p>
                </div>
                <div className="PostOption pr-0">
                    <FontAwesomeIcon className="IconFav" icon={this.Fav()} onClick={this.Like} />
                    <FontAwesomeIcon className="IconFav" icon={faComment} />
                    <FontAwesomeIcon className="IconFav" icon={faShareAlt} />
                </div>
            </div>
        </div>
        )
    }
}

export default Actuality;