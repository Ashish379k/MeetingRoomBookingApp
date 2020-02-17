import React, { Component } from 'react'
import MeetingRoomCard from './MeetingRoomCard'
import {connect} from 'react-redux'
import {getAllRooms} from '../../redux/Action' 
import {Redirect,Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             start:0,
             end:5,
             isActive:false,
             arr:[],
        }
    }
    handleClick = (e)=>{
    let start = Number(e.target.value-1)*5
    let  end = Number(e.target.value)*5
     this.setState({
         start:start,
         end:end,
         isActive:true
     })
    }
    componentDidMount = ()=>{
        let arr = [...this.props.roomsDataBase]
        this.setState({
            arr:arr
        })
    }
    sortby = (e) =>{
       let  arr = [...this.state.arr]
        if(e.target.value=="Price-ASC"){
            arr.sort((a,b)=>a.pricePerDay-b.pricePerDay)
        }
        else if(e.target.value=="Price-DSC"){
            arr.sort((a,b)=>b.pricePerDay-a.pricePerDay)
        }
        else if(e.target.value=="Capacity-ASC"){
            arr.sort((a,b)=>a.capacity-b.capacity)
        }
        else if(e.target.value=="Capacity-DSC"){
            arr.sort((a,b)=>b.capacity-a.capacity)
        }
        this.setState({
            arr:arr,
        })
    }
    filterby = (e) =>{
        var  arr = [...this.props.roomsDataBase]
        if(e.target.value !="0"){
        var newend = this.props.roomsDataBase.length
        var newArr = arr.filter((ele)=>{
            if(ele.floor==e.target.value){
                return ele
                 }
                })
          }
          else{
              var newArr = [...this.props.roomsDataBase]
            var newend = 5
              
          }
        this.setState({
            arr:newArr,
            start:0,
            end:newend
        })
    }
    render() {
        let pagination = []
        for (let i = 1;i<=Math.ceil(this.state.arr.length/5);i++){
            pagination.push(
            <li className="page-item" ><button className="page-link btn-primary" value={i}  onClick={this.handleClick}>{i}</button></li>
            )
        }
        return (
        <> 
            <div className="container m-auto text-center">
                <div className="row">
                    <div className="col-4 m-auto">
                       <select className="form-control my-4" onChange={this.sortby}>
                           <option>Sort-By</option>
                           <option>Price-ASC</option>
                           <option>Price-DSC</option>
                           <option>Capacity-ASC</option>
                           <option>Capacity-DSC</option>
                       </select>
                    </div>
                    <div className="col-4 m-auto">
                    <select className="form-control"  onChange={this.filterby}>
                           <option value="0">Filter-By</option>
                           <option value="1">Floor-1</option>
                           <option value="2">Floor-2</option>
                           <option value="3">Floor-3</option>
                           <option value="4">Floor-4</option>
                       </select>
                    </div>
                </div>
                <div className="row m-auto justify-content-center">
                    {this.state.arr.map((ele,index)=>{
                    if(index<this.state.end && index >= this.state.start)
                     return  (
                    <div className="col-sm-12 my-sm-1 col-md-6 my-md-2 col-lg-4 my-4" key={ele.name}>
                     <MeetingRoomCard floor={ele.floor} name = {ele.name} capacity = {ele.capacity} pricePerDay = {ele.pricePerDay}/>
                    </div>
                    )
                    })}
                </div>
            </div>
            <div className="container m-auto text-center">
                <div className="row m-auto justify-content-center text-center">
                    <div className="col-6 m-auto">
                        <nav aria-label="Page navigation example m-auto">
                            <ul className="pagination">
                                {pagination}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-6 m-auto p-4 text-center">
                       <Link className="btn btn-warning" to ='/'>Back to Dashboard</Link>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    roomsDataBase:state.roomsDataBase
})

const mapDispatchToProps = dispatch=>({
    // getAllRooms:()=>dispatch(getAllRooms()) 
})


export default connect (mapStateToProps,mapDispatchToProps) (Home)
