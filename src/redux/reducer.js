import {BOOK_ROOM,SET_DATE,FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,FETCH_USER_FAILURE,} from './Action'

const initialStore = {
    roomsDataBase: [
        {
            floor: "1",
            name: "MeetingRoom-1",
            capacity: '100',
            pricePerDay: '15999',
            isBookedOn: []
        },
        {
            floor: "1",
            name: "MeetingRoom-2",
            capacity: '101',
            pricePerDay: '50420',
            isBookedOn: []
        },
        {
            floor: "1",
            name: "MeetingRoom-3",
            capacity: '102',
            pricePerDay: '5060',
            isBookedOn: []
        }, {
            floor: "1",
            name: "MeetingRoom-4",
            capacity: '103',
            pricePerDay: '5600',
            isBookedOn: []
        }, {
            floor: "1",
            name: "MeetingRoom-5",
            capacity: '104',
            pricePerDay: '5070',
            isBookedOn: []
        }, {
            floor: "2",
            name: "MeetingRoom-11",
            capacity: '105',
            pricePerDay: '5090',
            isBookedOn: []
        },
        {
            floor: "2",
            name: "MeetingRoom-12",
            capacity: '106',
            pricePerDay: '5040',
            isBookedOn: []
        },
        {
            floor: "2",
            name: "MeetingRoom-13",
            capacity: '107',
            pricePerDay: '5008',
            isBookedOn: []
        }, {
            floor: "2",
            name: "MeetingRoom-14",
            capacity: '16',
            pricePerDay: '32500',
            isBookedOn: []
        }, {
            floor: "2",
            name: "MeetingRoom-15",
            capacity: '9',
            pricePerDay: '42000',
            isBookedOn: []
        }, {
            floor: "3",
            name: "MeetingRoom-21",
            capacity: '110',
            pricePerDay: '50140',
            isBookedOn: []
        },
        {
            floor: "3",
            name: "MeetingRoom-22",
            capacity: '4',
            pricePerDay: '50200',
            isBookedOn: []
        },
        {
            floor: "3",
            name: "MeetingRoom-23",
            capacity: '1200',
            pricePerDay: '500000',
            isBookedOn: []
        }, {
            floor: "3",
            name: "MeetingRoom-24",
            capacity: '17',
            pricePerDay: '52000',
            isBookedOn: []
        }, {
            floor: "3",
            name: "MeetingRoom-25",
            capacity: '50',
            pricePerDay: '50000',
            isBookedOn: []
        }, {
            floor: "4",
            name: "MeetingRoom-31",
            capacity: '8',
            pricePerDay: '8000',
            isBookedOn: []
        },
        {
            floor: "4",
            name: "MeetingRoom-32",
            capacity: '10',
            pricePerDay: '5000',
            isBookedOn: []
        },
        {
            floor: "4",
            name: "MeetingRoom-33",
            capacity: '80',
            pricePerDay: '15000',
            isBookedOn: []
        }, {
            floor: "4",
            name: "MeetingRoom-34",
            capacity: '150',
            pricePerDay: '52000',
            isBookedOn: []
        }, {
            floor: "4",
            name: "MeetingRoom-35",
            capacity: '120',
            pricePerDay: '50000',
            isBookedOn: []
        }

    ],
    isLoggedin:false,
    date:{},
    token:'',
    error:'',
    message:''

}

const reducer = (state=initialStore,action)=>{
    switch(action.type){
    case FETCH_USER_REQUEST:
            return {
                ...state,
            }
    case FETCH_USER_SUCCESS:
            return {
                ...state,
                token:action.data.token,
                error:action.data.error,
                message:action.data.message
            }
    case FETCH_USER_FAILURE:
            return {
                ...state,
            }

    case BOOK_ROOM:
        const myRoom = state.roomsDataBase.map(ele=>{
            if(ele.name === action.name){
             ele.isBookedOn.push(action.date)
             return ele
            }
            else{
                return ele
            }
        })
        return{
          ...state,
          roomsDataBase:myRoom
        }

   case SET_DATE:
       return{
           ...state,
           date:{...action.payload}
       }

        default:
            return state
    }
}

export {reducer}