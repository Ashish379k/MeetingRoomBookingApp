import React, { Component } from 'react'
import {setDate} from '../../redux/Action'
import { connect } from 'react-redux'



class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             startDate:'',
             endDate:''
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = () =>{ 
     const payload ={...this.state}
      this.props.setDate(payload)
      this.props.history.push('/Home')
    }
  
   

    render() {
        return (
            <div>
                <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="view">
                                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                    alt="First slide" />
                                <div class="mask rgba-black-light"></div>
                            </div>
                            <div class="carousel-caption row">
                                <div class="md-form col-5 m-auto">
                                    <input placeholder="Selected starting date"type="date" onChange={this.handleChange} name="startDate" class="form-control datepicker"/>
                                </div>
                                <div class="md-form col-5 m-auto">
                                    <input placeholder="Selected starting date" type="date" onChange={this.handleChange} name="endDate" class="form-control datepicker m-4"/>
                                </div>
                                <div class="md-form col-5 m-auto">
                                    <button  onClick={this.handleSubmit} class="form-control btn btn-success">Search Available Meeting Rooms</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="view">
                                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                    alt="Second slide" />
                                <div class="mask rgba-black-strong"></div>
                            </div>
                            <div class="carousel-caption">
                                <h3 class="h3-responsive">Strong mask</h3>
                                <p>Secondary text</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="view">
                                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                    alt="Third slide" />
                                <div class="mask rgba-black-slight"></div>
                            </div>
                            <div class="carousel-caption">
                                <h3 class="h3-responsive">Slight mask</h3>
                                <p>Third text</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    date:state.date
})

const mapDispatchToProps = dispatch=>({
    setDate:(payload)=>dispatch(setDate(payload))
})

export default connect (mapStateToProps,mapDispatchToProps)(Dashboard)