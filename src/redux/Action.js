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


const loginUser = (url,payload) => {
  return dispatch => {
    dispatch(fetchLoginRequest);
    return axios
      .post(url, { ...payload })
      .then(res => {
        return dispatch(fetchLoginSuccess(res.data));
      })
      .catch(err => dispatch(fetchLoginFailure(err.error)));
  };
  };
const registerUser = (url,payload) =>{
  return dispatch => {
    dispatch(fetchLoginRequest);
    return axios
      .post(url, { ...payload })
      .then(res => {
        return dispatch(fetchLoginSuccess(res.data));
      })
      .catch(err => dispatch(fetchLoginFailure(err.error)));
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

export
 {
   FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  registerUser,
  loginUser,
  bookingRoom,
  BOOK_ROOM,
  setDate,
  SET_DATE
}


