import React from 'react'
import Chat from './Chat';

function Contact() {
    return <div className="Contact col-2 offset-1 row">
        <div className="TitleContact col-12">
            <p className="font-weight-bold text-center">Contact :</p>
        </div>
        <div className="ListOfContact col-12">
            <div className="OneContact">
                <img src="" className="ContactImage" />
                <p>FirstName LastName</p>
                <hr/>
            </div>
        </div>
        <Chat />
    </div>
}

export default Contact;