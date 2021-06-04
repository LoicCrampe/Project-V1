import React from 'react'
import Title from './Contents/Title'
import Post from './Contents/Post'
import Actuality from './Contents/Actuality'

function Center() {
    return <div className="Center col-6 offset-3">
        <Title />
        <Post />
        <Actuality />
    </div>
}

export default Center;