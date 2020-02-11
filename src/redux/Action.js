import axios from'axios'
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE = "FETCH_USER_FALURE"
const SET_DATE = 'SET_DATE'
const BOOK_ROOM = "BOOK_ROOM"



const fetchLoginRequest = query => {
    return {
      type: FETCH_USER_REQUEST,
      query: query || ""
    };
  };
  
  const fetchLoginSuccess = data => {
    return {
      type: FETCH_USER_SUCCESS,
      data: data
    };
  };
  
  const fetchLoginFailure = error => {
    return {
      type: FETCH_USER_FAILURE,
      error: error
    };
  };


const fetchData = (query = null) => {
    return dispatch => {
      dispatch(fetchLoginRequest);
      return axios
        .get(`https://api.github.com/search/users?q=${query}`)
        .then(res => {
          return dispatch(fetchLoginSuccess(res.data));
        })
        .catch(err => dispatch(fetchLoginFailure(err)));
    };
  };

const bookingRoom = (payload,name) => {
  return {
    type:BOOK_ROOM,
    date:payload,
    name
  }
}
const setDate = (payload)=>{
  return {
    type:"SET_DATE",
    payload
  }
}

export {FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,FETCH_USER_FAILURE,
  fetchLoginRequest,fetchLoginSuccess,fetchLoginFailure,
  fetchData,bookingRoom,BOOK_ROOM,setDate,SET_DATE}


