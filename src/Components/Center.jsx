import React from 'react'
import Title from './Contents/Title'
import Post from './Contents/Post'
import Actuality from './Contents/Actuality'
import logo from '../Images/Logo.png'

function Center() {
    return <div className="col-6 offset-3">
        <Title Title={"#ExempleOfChannelName"} />
        <Post />
        <Actuality 
        Like={true} 
        numberLike={5500} 
        numberComments={655} 
        numberShare={450} 
        date={"06/08/2021 12:00:00"} 
        imageProfil={logo}
        firstName={"Sacha"}
        lastName={"Sangha"}
        />
    </div>
}

export default Center;