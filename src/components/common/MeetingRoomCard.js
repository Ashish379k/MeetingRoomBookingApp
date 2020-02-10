import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MeetingRoomCard extends Component {
    
    render() {
        return (
            <div className="card-deck justify-content-center">
                <div className="card">
                    <img className="card-img-top" src="https://placeimg.com/240/200/any" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">At Floor : {this.props.floor}</h5>
                            <p className="card-text">Meeting Room Name :{this.props.name}</p>
                            <p className="card-text">Maximum Capacity :{this.props.capacity}</p>
                            <p className="card-text">Price per Day is Rs :{this.props.pricePerDay}</p>
                            <Link to={`/booking/${this.props.name}`} className="btn btn-success">Book This Room</Link>
                        </div>
                </div>
            </div>
        )
    }
}
