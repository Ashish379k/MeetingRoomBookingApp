import React, { Component } from 'react'
import {setDate} from '../../redux/Action'
import { connect} from 'react-redux'
import {Link} from 'react-router-dom'



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
    //   this.props.history.push('/Home')
    }
  
   

    render() {
        return (
            <div>
                <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="view">
                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                    alt="First slide" />
                                <div className="mask rgba-black-light"></div>
                            </div>
                            <div className="carousel-caption row">
                                <div className="md-form col-5 m-auto">
                                    <input placeholder="Selected starting date"type="date" onChange={this.handleChange} name="startDate" className="form-control datepicker"/>
                                </div>
                                <div className="md-form col-5 m-auto">
                                    <input placeholder="Selected starting date" type="date" onChange={this.handleChange} name="endDate" className="form-control datepicker m-4"/>
                                </div>
                                <div className="md-form col-5 m-auto">
                                    <button  onClick={this.handleSubmit} className="form-control btn btn-success"><Link className="p-0" to="/Home">Search Available Meeting Rooms</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view">
                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                    alt="Second slide" />
                                <div className="mask rgba-black-strong"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Secondary text</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view">
                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                    alt="Third slide" />
                                <div className="mask rgba-black-slight"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Slight mask</h3>
                                <p>Third text</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
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