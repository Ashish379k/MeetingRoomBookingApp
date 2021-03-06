import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'

class Nav extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center m-3 text-white">Book your meeting room</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="nav nav-default">
                            <li className="nav-item">
                                <Link  className="text-white nav-link" to ="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/Orders" className="text-white nav-link">Orders</Link>
                            </li>
                            {this.props.token =='' ?
                             (<li className="nav-item">
                                <Link to="/auth/login" className="text-white nav-link">Login</Link>
                            </li>):
                             (
                            <>
                             <li className="nav-item">
                                <p className="text-white nav-link">{this.props.token}</p>
                            </li>
                            <li className="nav-item fl-auto">
                                <button className="btn btn-danger nav-link">Signout</button>
                            </li>
                            </>
                            )
                            }
                           
                           
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token:state.token
})

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps,mapDispatchToProps) (Nav)