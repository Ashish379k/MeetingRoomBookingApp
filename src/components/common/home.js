import React, { Component } from 'react'
// import MeetingRoomCard from './MeetingRoomCard'
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
       this.setMyState()
    }
    setMyState = ()=>{
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
         if(e.target.value=="Floor-1"){
            var newArr = arr.filter((ele)=>{
                 if(ele.floor=="1"){
                     return ele
                 }
             })
         }
         else if(e.target.value=="Floor-2"){
            var newArr = arr.filter((ele)=>{
                if(ele.floor=="2"){
                    return ele
                }
            })
        }
         else if(e.target.value=="Floor-3"){
            var newArr = arr.filter((ele)=>{
                if(ele.floor=="3"){
                    return ele
                }
            })
        }
         else if(e.target.value=="Floor-4"){
            var  newArr = arr.filter((ele)=>{
                if(ele.floor=="4"){
                    return ele
                }
            })
        }
        else{
            var newArr = [...arr]
            this.setState({
                arr:newArr,
                start:0,
                end:5
                })
            return
        }
        this.setState({
            arr:newArr,
            start:0,
            end:this.props.roomsDataBase.length
        })
      
     }
   

    render() {
        let pagination = []
        for (let i = 1;i<=Math.ceil(this.state.arr.length/5);i++){
            pagination.push(
            <li class="page-item"><button className="page-link btn-primary" value={i} active ={this.state.isActive} onClick={this.handleClick}>{i}</button></li>
            )
        }
        return (
        <> 
            <div className="container m-auto text-center">
                <div className="row">
                    <div className="col-6">
                       <select onChange={this.sortby}>
                           <option>Sort-By</option>
                           <option>Price-ASC</option>
                           <option>Price-DSC</option>
                           <option>Capacity-ASC</option>
                           <option>Capacity-DSC</option>
                       </select>
                    </div>
                    <div className="col-6">
                    <select onChange={this.filterby}>
                           <option>Filter-By</option>
                           <option>Floor-1</option>
                           <option>Floor-2</option>
                           <option>Floor-3</option>
                           <option>Floor-4</option>
                       </select>
                    </div>
                </div>
                <div className="row m-auto justify-content-center">
                    {this.state.arr.map((ele,index)=>{
                    if(index<this.state.end && index >= this.state.start)
                     return  (
                    <div className="col-4 my-4">
                             <div className="card-deck justify-content-center">
                                 <div className="card">
                                     <img className="card-img-top" src="https://placeimg.com/240/200/any" alt="Card image cap" />
                                     <div className="card-body">
                                         <h5 className="card-title">At Floor : {ele.floor}</h5>
                                         <p className="card-text">Meeting Room Name :{ele.name}</p>
                                         <p className="card-text">Maximum Capacity :{ele.capacity}</p>
                                         <p className="card-text">Price per Day is Rs :{ele.pricePerDay}</p>
                                         <Link to={`/booking/${ele.name}`} className="btn btn-success">Book This Room</Link>
                                     </div>
                                 </div>
                             </div>
                     {/* <MeetingRoomCard floor={ele.floor} name = {ele.name} capacity = {ele.capacity} pricePerDay = {ele.pricePerDay}/> */}
                    </div>
                    )
                    })}
                </div>
            </div>
            <div className="container m-auto text-center">
                <div className="row m-auto justify-content-center text-center">
                    <div className="col-6 m-auto">
                        <nav aria-label="Page navigation example m-auto">
                            <ul class="pagination">
                                {pagination}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-6 m-auto">
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
