import React, { Component } from 'react'

class LeftSidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            FarouriteChannel : [
                {Name: "#Mila"},
                {Name: "#BrunchStream"},
                {Name: "#Mikasa"},
                {Name: "#Eren"},
                {Name: "#Naruto"},
                {Name: "#SAO"},
                {Name: "#DemonSouls"},
                {Name: "#NierAutomata"},
                {Name: "#SAO"},
                {Name: "#DemonSouls"},
                {Name: "#NierAutomata"},
                {Name: "#SAO"},
                {Name: "#DemonSouls"},
                {Name: "#NierAutomata"},
                {Name: "#KebabChef"}
            ],
            RecommendedChannel : [
                {Name: "#Sung"},
                {Name: "#Jin"},
                {Name: "#Woo"},
                {Name: "#Beru"},
                {Name: "#Steel"},
                {Name: "#Defense"},
                {Name: "#Hunter"},
                {Name: "#SAO"},
                {Name: "#DemonSouls"},
                {Name: "#NierAutomata"},
                {Name: "#SAO"},
                {Name: "#DemonSouls"},
                {Name: "#NierAutomata"},
                {Name: "#Monster"}
            ]
        }
    }

    render() {
        return <div className="LeftSidebar col-2">
                    <p className="font-weight-bold">Channels Favoris :</p>
                    <ul>
                    {this.state.FarouriteChannel.map((channel, index) => (
                        <li key={"td" + index}>{channel.Name}</li>
                    ))}
                    </ul>
                    <p className="font-weight-bold">Channels recommandé:</p>
                    <ul>
                    {this.state.RecommendedChannel.map((channel, index) => (
                        <li key={"td" + index}>{channel.Name}</li>
                    ))}
                    </ul>
        </div>
    }
}

export default LeftSidebar;