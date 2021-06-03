import React, { Fragment } from 'react'

function Contact({FirstName, LastName}) {
    return <>
        <img src="" className="ContactImage col-1" />
        <p className="col-11">{FirstName} {LastName}</p>
        <hr className="col-12"/>
    </>
}

export default Contact;