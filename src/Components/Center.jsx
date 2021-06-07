import React from 'react'
import Title from './Contents/Title'
import Post from './Contents/Post'
import Actuality from './Contents/Actuality'

function Center() {
    return <div className="col-6 offset-3">
        <Title Title={"#ExempleOfChannelName"} />
        <Post />
        <Actuality Like={true} numberLike={5500} numberComments={655} numberShare={450} />
    </div>
}

export default Center;