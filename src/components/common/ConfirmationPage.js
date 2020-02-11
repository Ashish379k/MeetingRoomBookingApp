import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class ConfirmationPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isWaiting:true
        }
    }
    

    componentDidMount = ()=>{
       setTimeout(() => {
            this.setState({
                isWaiting:false
            })
        }, 5000);
    }
    render() {
        if(this.state.isWaiting){
        return (
            <div className="container">
                <div className="card text-dark col-6 m-auto">
                    <img className="card-img blur" src="https://image.shutterstock.com/image-photo/picture-business-meeting-conference-room-260nw-765676603.jpg" alt="Card" />
                    <div className="card-img-overlay">
                        <h1 className="card-title bg-success text-center m-auto">Booking Confirmed</h1>
                        <p className="card-text text-white bg-success text-center m-auto">Thank you for Booking with us.We are pleased to host your meeeting.And wish you all the <br></br>
                        best.</p>
                    </div>
                    <p className="btn btn-success m-auto text-center">Please wait for 5 Sec you will be redirected to Dashboard</p>
                </div>
            </div>
        )}
        else{
            return (<Redirect to='/'/>)
        }
    }
}
