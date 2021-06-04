import React from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentAlt} from '@fortawesome/free-regular-svg-icons'

function Post() {
    return (
        <div className="Center col-12 text-center">
            <input placeholder="Que voulez-vous dire ?" className="col-12 form-control PostInput"/>
            <div className="col-12 row">
                <input type="file" id="InputPhoto" className="btn btn-outline-primary col-5" placeholder="Ajouter une photo/video" />
                <input type="submit" placeholder="Envoyer" className="btn btn-success col-2 offset-5"/>
            </div>
        </div>
    )
}

export default Post;