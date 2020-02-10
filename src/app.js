import React, { Component } from 'react'
import Nav from './components/common/Nav'
import Routes from './route/route'

export default class app extends Component {
    render() {
        return (
            <>
            <Nav/> 
            <Routes/>
            </>
        )
    }
}
