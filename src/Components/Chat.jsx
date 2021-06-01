import React from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentAlt} from '@fortawesome/free-regular-svg-icons'

function Chat() {
    return (
        <div className="Chat col-12">
            <FontAwesomeIcon icon={faCommentAlt} />
            <p>Messages</p>
        </div>
    )
}

export default Chat;
