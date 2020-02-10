import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'


export default class Booking extends Component  {
    render() {
        const room = this.props.roomsDataBase.filter(ele=>{
            if (ele.name == this.props.match.params.id){
                return ele
            }
            
        })
        if(room.length!=0){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card-deck justify-content-center">
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
                    <div className="col-5 m-auto">
                    <form className="text-center">
                        <h1 className="text-center text-info"> your are booking-{room[0].name} </h1>
                            <div className="form-group row">
                                <label for="start" className="col-sm-2 col-form-label">From</label>
                                <div className="col-sm-10">
                                    <input type="date"  className="form-control" id="start" value="email@example.com" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="end" className="col-sm-2 col-form-label">To</label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" id="end" placeholder="Password" />
                                </div>
                            </div>
                                <button className="btn btn-success justify-content-center m-auto">Checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        )
        }
        else{
            return (<div>Hello</div>)
        }
    }
}



