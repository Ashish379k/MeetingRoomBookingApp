import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center btn-success">Book your meeting room</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to ="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
             
            </div>
        )
    }
}
