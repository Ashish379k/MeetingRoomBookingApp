import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from "../components/common/home"
import Booking from '../components/auth/Booking'
import {connect} from 'react-redux'
import Dashboard from '../components/common/Dashboard'

class Routes extends Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path ="/" component = {(props)=><Dashboard {...props}/>}/>
               <Route path="/Home" component ={Home}/>
               <Route path="/booking/:id" component = {(props)=><Booking {...props} roomsDataBase={this.props.roomsDataBase}/>}/>
            </Switch>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    roomsDataBase:state.roomsDataBase
})

const mapDispatchToProps = dispatch=>({
    
})


export default connect (mapStateToProps,mapDispatchToProps) (Routes)