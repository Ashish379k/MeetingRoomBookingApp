import React, { Component } from 'react'
import MeetingRoomCard from './MeetingRoomCard'
import {connect} from 'react-redux'
import {getAllRooms} from '../../redux/Action' 

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
        let arr = [...this.state.arr,...this.props.roomsDataBase]
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
            start:0,
            end:this.state.arr.length-1

        })
    }
        filterby = (e) =>{
        var  arr = [...this.state.arr]
         if(e.target.value=="Floor-1"){
            var newArr = arr.map((ele)=>{
                 if(ele.floor=="1"){
                     return ele
                 }
             })
         }
         else if(e.target.value=="Floor-2"){
            var newArr = arr.map((ele)=>{
                if(ele.floor=="2"){
                    return ele
                }
            })
        }
         else if(e.target.value=="Floor-3"){
            var newArr = arr.map((ele)=>{
                if(ele.floor=="3"){
                    return ele
                }
            })
        }
         else if(e.target.value=="Floor-4"){
            var  newArr = arr.map((ele)=>{
                if(ele.floor=="4"){
                    return ele
                }
            })
        }
        // this.setState({
        //     arr:newArr,
        //     start:0,
        //     end:this.state.arr.length-1

        // })
      
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
                     <MeetingRoomCard floor={ele.floor} name = {ele.name} capacity = {ele.capacity} pricePerDay = {ele.pricePerDay}/>
                    </div>
                    )
                    })}
                </div>
            </div>
            <div className="container m-auto text-center">
            <div className="row m-auto justify-content-center text-center">
                <div className="col">
                    <nav aria-label="Page navigation example m-auto">
                        <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#"></a></li>
                            {pagination}
                        </ul>
                    </nav>
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
