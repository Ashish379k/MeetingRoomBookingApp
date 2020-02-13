import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {bookingRoom} from '../../redux/Action'


class Booking extends Component  {
    constructor(props) {
        super(props)
    
        this.state = {
             totalDays:0
        }
    }
    
    componentDidMount =()=>{
        let totalDays = this.getDays(this.props.date.startDate,this.props.date.endDate)
        this.setState({
            totalDays:totalDays
        })
     
    }

    handleSubmit = (e)=>{
        const newName = e.target.value 
        const payload = {...this.props.date}
        this.props.bookingRoom(payload,newName)
        console.log(this.props.roomsDataBase)
        this.props.history.push('/confirmation')

    }
    getDays = (date1,date2)=>{
        let arr1 = date1.split('-')
        let arr2 = date2.split('-')
        let days = 0
            days = days + Math.abs(Number(arr1[1]-arr2[1]))*30
            days = days + Math.abs(Number(arr1[2]-arr2[2]))
        return days+1
    }
  
    render() {
        const room = this.props.roomsDataBase.filter(ele=>ele.name == this.props.match.params.id)
        if(this.props.token !==''){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5 mx-auto my-3 p-3">
                        <div className="card-deck justify-content-center my-2">
                            <div className="card">
                                <img className="card-img-top" src="https://placeimg.com/240/200/any" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title"><b>At Floor :</b>{room[0].floor} </h5>
                                    <p className="card-text"><b>Meeting Room Name :</b>{room[0].name}</p>
                                    <p className="card-text"><b>Maximum Capacity :</b>{room[0].capacity}</p>
                                    <p className="card-text"><b>Price per Day is Rs :</b>{room[0].pricePerDay}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 m-auto border border-dark p-3">
                    <div className="text-center">
                        <p className="border border-dark p-2"><b>Reservation reciept</b></p>
                            <div className="form-group row">
                                <label htmlFor="start" className="col-sm-2 col-form-label"><b>From</b></label>
                                <div className="col-sm-10">
                                    <p  className="form-control" id="start">{this.props.date.startDate} </p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="end" className="col-sm-2 col-form-label"><b>To</b></label>
                                <div className="col-sm-10">
                                    <p  className="form-control" id="end">{this.props.date.endDate}</p>
                                </div>
                                <p className="form-contol">Your Bill Amount is: {Number(this.state.totalDays)*Number(room[0].pricePerDay)} </p>
                            </div>
                                <button type="submit" value = {room[0].name} onClick={this.handleSubmit} className="btn btn-success justify-content-center m-auto">Checkout</button>
                        </div>
                                <Link className="btn btn-warning my-4" to ='/'>Back to Dashboard</Link>
                    </div>
                </div>
            </div>
        )}
        else{
            return(<Redirect to="/auth/login"/>)
        }
        
        }
    }  

    
    



const mapStateToProps = (state) => ({
    roomsDataBase:state.roomsDataBase,
    date:state.date,
    token:state.token
})

const mapDispatchToProps = (dispatch) => ({
    bookingRoom:(payload,name)=>dispatch(bookingRoom(payload,name))
})

export default connect(mapStateToProps,mapDispatchToProps)(Booking)