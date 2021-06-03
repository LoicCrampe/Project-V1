import React, { Component }from 'react'
import Chat from './Contacts/Chat'
import Contact from './Contacts/Contact'

class ListOfContacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listContact: [
                {FirstName: "John", LastName: "Doe"},
                {FirstName: "Eric", LastName: "Chateau"},
                {FirstName: "Damian", LastName: "Rinard"},
                {FirstName: "Elodie", LastName: "Spretzick"},
                {FirstName: "Amanda", LastName: "Chaumon"},
                {FirstName: "Alain", LastName: "Térieur"},
                {FirstName: "Roger", LastName: "Maingon"},
                {FirstName: "Damian", LastName: "Rinard"},
                {FirstName: "Elodie", LastName: "Spretzick"},
                {FirstName: "Amanda", LastName: "Chaumon"},
                {FirstName: "Alain", LastName: "Térieur"},
                {FirstName: "Roger", LastName: "Maingon"},
                {FirstName: "Alain", LastName: "Térieur"},
                {FirstName: "Roger", LastName: "Maingon"},
                {FirstName: "Alain", LastName: "Térieur"},
                {FirstName: "Roger", LastName: "Maingon"},
                {FirstName: "Salomé", LastName: "Salami"}
            ]
        }
    }

    render() {
        const list = this.state.listContact
        return <div className="Contact col-2 offset-1 row">
            <div className="TitleContact col-12">
                <p className="font-weight-bold text-center">Contact :</p>
            </div>
            <div className="ListOfContact col-12">
                {list.map((contact, index) => (
                    <div key={index} id={"Contact" + index} className="OneContact row">
                        <Contact FirstName={contact.FirstName} LastName={contact.LastName} />
                    </div>
                ))}
            </div>
            <Chat />
        </div>
    }
}

export default ListOfContacts;